import express from "express";
import cors from "cors";
import { mkdtempSync, writeFileSync, rmSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";
import { spawn } from "child_process";

const app = express();
app.use(cors());
app.use(express.json({ limit: "300kb" }));

app.post("/api/run", async (req, res) => {
    const code = req.body?.code;
    if (typeof code !== "string" || code.length > 200000) {
        res.status(400).json({ error: "Código inválido" });
        return;
    }

    const dir = mkdtempSync(join(tmpdir(), "zumbra-"));
    const file = join(dir, "main.zum");
    writeFileSync(file, code, "utf8");

    try {
        const args = [
            "run", "--rm",
            "--network", "none",
            "--cpus=1", "--memory=256m",
            "-v", `${dir}:/work:ro`,
            "-w", "/work",
            "1315jlfont/zumbra:latest",
            "/work/main.zum"
        ];

        const proc = spawn("docker", args, { stdio: ["ignore", "pipe", "pipe"] });
        const killer = setTimeout(() => proc.kill("SIGKILL"), 2000);

        const outChunks = [];
        const errChunks = [];
        proc.stdout.on("data", d => outChunks.push(d));
        proc.stderr.on("data", d => errChunks.push(d));

        proc.on("close", codeExit => {
            clearTimeout(killer);
            const stdout = Buffer.concat(outChunks).toString("utf8").slice(0, 64000);
            const stderr = Buffer.concat(errChunks).toString("utf8").slice(0, 32000);
            res.json({ exitCode: codeExit ?? 1, stdout, stderr });
            try { rmSync(dir, { recursive: true, force: true }); } catch { }
        });
    } catch (e) {
        try { rmSync(dir, { recursive: true, force: true }); } catch { }
        res.status(500).json({ error: String(e?.message || e) });
    }
});

app.listen(4000, () => { });
