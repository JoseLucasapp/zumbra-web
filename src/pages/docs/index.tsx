import { useMemo, useState } from 'react'
import SiteShell from '../../components/SiteShell'
import { docsData } from './docs'
import { reserved } from '../../helpers/utils'
import './style.css'

const sections = docsData()

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function highlightCode(text: string) {
  const escaped = escapeHtml(text)

  return escaped.replace(
    /(\/\/[^\n]*|"[^"]*"|'[^']*'|\b[a-zA-Z_]+\b|<<|>>|==|!=|\/|[{}()[\];.,+\-*%=<>])/gm,
    (match) => {
      if (match.startsWith('//')) {
        return `<span style="color:#64748B">${match}</span>`
      }

      if (/^".*"$|^'.*'$/.test(match)) {
        return `<span style="color:#6D28D9">${match}</span>`
      }

      const keyword = match.toLowerCase()
      if (reserved[keyword]) {
        return `<span style="color:${reserved[keyword]}">${match}</span>`
      }

      return match
    }
  )
}

export default function Docs() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const currentSection = useMemo(() => sections[selectedIndex], [selectedIndex])

  return (
    <SiteShell>
      <section className="page-hero shell-container docs-hero">
        <div>
          <span className="eyebrow">Documentation</span>
          <h1>Zumbra documentation.</h1>
          <p>
            Explore the language, built-ins, integrations, async features, error handling,
            and the growing Zumbra ecosystem in a cleaner documentation layout.
          </p>
        </div>
      </section>

      <section className="content-section shell-container docs-layout">
        <aside className="docs-sidebar">
          <div className="docs-sidebar-card">
            <div className="docs-sidebar-top">
              <span className="docs-sidebar-kicker">Documentation</span>
              <h3>Contents</h3>
            </div>

            <nav className="docs-side-nav" aria-label="Documentation sections">
              <ul className="docs-side-list">
                {sections.map((section, index) => {
                  const isActive = selectedIndex === index

                  return (
                    <li key={section.title}>
                      <button
                        type="button"
                        className={`docs-side-link ${isActive ? 'is-active' : ''}`}
                        onClick={() => setSelectedIndex(index)}
                      >
                        <span className="docs-side-link-label">{section.title}</span>
                      </button>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>
        </aside>

        <main className="docs-main">
          <header className="docs-main-header">
            <span className="eyebrow">Section</span>
            <h2>{currentSection.title}</h2>
            <p>{currentSection.description}</p>
          </header>

          <div className="docs-content">
            {currentSection.content?.map((group: any) => (
              <article key={group.title} className="docs-block">
                <h3>{group.title}</h3>

                <div className="docs-items">
                  {group.data.map((item: any, index: number) => {
                    if (item.link) {
                      return (
                        <a
                          key={`${group.title}-${index}`}
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                          className="docs-link-card"
                        >
                          {item.text}
                        </a>
                      )
                    }

                    if (item.code) {
                      return (
                        <div
                          key={`${group.title}-${index}`}
                          className="code-block"
                          dangerouslySetInnerHTML={{ __html: highlightCode(item.code) }}
                        />
                      )
                    }

                    return (
                      <p key={`${group.title}-${index}`} className="docs-paragraph">
                        {item.text}
                      </p>
                    )
                  })}
                </div>
              </article>
            ))}
          </div>
        </main>
      </section>
    </SiteShell>
  )
}