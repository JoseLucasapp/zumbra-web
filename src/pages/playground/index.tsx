import { useEffect, useRef, useState } from "react";
import * as monaco from "monaco-editor";
import "monaco-editor/min/vs/editor/editor.main.css";
import { reserved } from "../../helpers/utils";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

export default function App() {
    const editorRef = useRef<HTMLDivElement>(null);
    const [editor, setEditor] = useState<monaco.editor.IStandaloneCodeEditor | null>(null);
    const [out, setOut] = useState("pronto");

    useEffect(() => {
        if (!editorRef.current) return;
        monaco.languages.register({ id: "zumbra" });
        const keywordCases = Object.fromEntries(
            Object.keys(reserved)
                .filter((k) => /^[a-zA-Z_]\w*$/.test(k))
                .map((k) => [k, "keyword"])
        );

        monaco.languages.setMonarchTokensProvider("zumbra", {
            tokenizer: {
                root: [
                    [/[a-zA-Z_]\w*/, { cases: keywordCases }],
                    [/\d+(\.\d+)?/, "number"],
                    [/".*?"/, "string"],
                    [/'[^']*'/, "string"],
                    [/\/\/.*$/, "comment"],
                    [/[{}()\[\]]/, "@brackets"],
                    [/[<>!=+\-*/%]+/, "operator"],
                ],
            },
        });


        monaco.languages.registerCompletionItemProvider("zumbra", {
            provideCompletionItems: (model, position) => {
                const word = model.getWordUntilPosition(position);
                const range = {
                    startLineNumber: position.lineNumber,
                    endLineNumber: position.lineNumber,
                    startColumn: word.startColumn,
                    endColumn: word.endColumn,
                };

                return {
                    suggestions: Object.keys(reserved).map((kw) => ({
                        label: kw,
                        kind: monaco.languages.CompletionItemKind.Keyword,
                        insertText: kw,
                        range,
                    })),
                };
            },
        });



        monaco.editor.defineTheme("zumbra-dark", {
            base: "vs-dark",
            inherit: true,
            rules: [
                ...Object.entries(reserved).map(([kw, color]) => ({
                    token: `keyword.${kw}`,
                    foreground: color.replace("#", ""),
                })),
                { token: "number", foreground: "d19a66" },
                { token: "string", foreground: "98c379" },
                { token: "comment", foreground: "5c6370", fontStyle: "italic" },
            ],
            colors: {},
        });

        const ed = monaco.editor.create(editorRef.current, {
            value: `var main << fct(){\nshow("Hello Zumbra!");\n};\n\nmain();`,
            language: "zumbra",
            theme: "zumbra-dark",
            automaticLayout: true,
            minimap: { enabled: false },
            fontSize: 14,
        });

        setEditor(ed);
        ed.focus();

        const resize = () => ed.layout();
        window.addEventListener("resize", resize);
        return () => {
            window.removeEventListener("resize", resize);
            ed.dispose();
        };
    }, []);

    async function run() {
        const code = editor?.getValue() ?? "";
        setOut("executando…");
        const res = await fetch(`${API_URL}/api/run`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ code }),
        });
        const data = await res.json();
        if (data.error) setOut("erro: " + data.error);
        else setOut(`exit=${data.exitCode}\n${data.stderr || ""}${data.stdout || ""}`);
    }

    return (
        <div style={{ display: "flex", width: "100%", height: "100%" }}>
            <div
                ref={editorRef}
                style={{ flex: 1, height: "100%", width: "calc(100% - 420px)" }}
            />
            <div style={{ width: 420, padding: 12, background: "#0f111a", color: "#e6e6e6" }}>
                <button onClick={run} style={{ padding: "8px 12px", marginBottom: 12 }}>▶ Run</button>
                <pre style={{ whiteSpace: "pre-wrap", margin: 0 }}>{out}</pre>
            </div>
        </div>
    );
}
