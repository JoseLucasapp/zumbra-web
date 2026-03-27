import { useEffect, useRef, useState } from 'react'
import * as monaco from 'monaco-editor'
import 'monaco-editor/min/vs/editor/editor.main.css'
import { reserved } from '../../helpers/utils'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000'

export default function Playground() {
  const editorRef = useRef<HTMLDivElement>(null)
  const [editor, setEditor] = useState<monaco.editor.IStandaloneCodeEditor | null>(null)
  const [out, setOut] = useState('')

  useEffect(() => {
    if (!editorRef.current) return

    monaco.languages.register({ id: 'zumbra' })

    const keywordCases = Object.fromEntries(
      Object.keys(reserved)
        .filter((key) => /^[a-zA-Z_]\w*$/.test(key))
        .map((key) => [key, 'keyword'])
    )

    monaco.languages.setMonarchTokensProvider('zumbra', {
      tokenizer: {
        root: [
          [/[a-zA-Z_]\w*/, { cases: keywordCases }],
          [/\d+(\.\d+)?/, 'number'],
          [/".*?"/, 'string'],
          [/'[^']*'/, 'string'],
          [/\/\/.*$/, 'comment'],
          [/[{}()\[\]]/, '@brackets'],
          [/[<>!=+\-*/%]+/, 'operator'],
        ],
      },
    })

    monaco.editor.defineTheme('zumbra-light', {
      base: 'vs',
      inherit: true,
      rules: [
        ...Object.entries(reserved).map(([keyword, color]) => ({
          token: `keyword.${keyword}`,
          foreground: color.replace('#', ''),
        })),
        { token: 'number', foreground: '0F172A' },
        { token: 'string', foreground: '6D28D9' },
        { token: 'comment', foreground: '64748B', fontStyle: 'italic' },
      ],
      colors: {
        'editor.background': '#FFFFFF',
        'editorLineNumber.foreground': '#94A3B8',
      },
    })

    const instance = monaco.editor.create(editorRef.current, {
      value: `var main << fct(){\n  show("Hello Zumbra!");\n};\n\nmain();`,
      language: 'zumbra',
      theme: 'zumbra-light',
      automaticLayout: true,
      minimap: { enabled: false },
      fontSize: 14,
      padding: { top: 20, bottom: 20 },
    })

    setEditor(instance)
    instance.focus()

    const resize = () => instance.layout()
    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', resize)
      instance.dispose()
    }
  }, [])

  async function run() {
    const code = editor?.getValue() ?? ''
    setOut('running...')

    try {
      const res = await fetch(`${API_URL}/api/run`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ code }),
      })
      const data = await res.json()

      if (data.error) {
        setOut('error: ' + data.error)
        return
      }

      setOut(`exit=${data.exitCode}\n${data.stderr || ''}${data.stdout || ''}`)
    } catch (error) {
      setOut(error instanceof Error ? error.message : 'Unable to run code right now.')
    }
  }

  return (
    <div className="playground-shell">
      <div className="playground-topbar">
        <a href="/" className="playground-brand">
          <img src="/zumbra-mark.png" alt="Zumbra logo" />
          <span>Back to site</span>
        </a>
        <button type="button" className="button button-primary" onClick={run}>
          Run code
        </button>
      </div>

      <div className="playground-layout">
        <div ref={editorRef} className="playground-editor" />
        <aside className="playground-output">
          <p className="output-label">Output</p>
          <pre>{out || 'Run a Zumbra snippet to see the result here.'}</pre>
        </aside>
      </div>
    </div>
  )
}
