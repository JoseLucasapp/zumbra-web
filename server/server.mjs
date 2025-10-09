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
        return res.status(400).json({ error: "Invalid code" });
    }

    const dir = mkdtempSync(join(tmpdir(), "zumbra-"));
    const file = join(dir, "main.zum");
    writeFileSync(file, code, "utf8");

    try {
        const proc = spawn("./zumbra", [file]);
        const killer = setTimeout(() => proc.kill("SIGKILL"), 2000);

        let stdout = "", stderr = "";
        proc.stdout.on("data", (d) => (stdout += d));
        proc.stderr.on("data", (d) => (stderr += d));

        proc.on("close", (exitCode) => {
            clearTimeout(killer);
            rmSync(dir, { recursive: true, force: true });
            res.json({ exitCode, stdout, stderr });
        });
    } catch (e) {
        rmSync(dir, { recursive: true, force: true });
        res.status(500).json({ error: String(e.message || e) });
    }
});

app.listen(4000, () => console.log("🚀 Zumbra API online on port 4000"));
