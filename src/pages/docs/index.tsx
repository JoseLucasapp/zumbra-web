import { useMemo, useState } from 'react'
import SiteShell from '../../components/SiteShell'
import { docsData } from './docs'
import { reserved } from '../../helpers/utils'

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
          <h1>Keep the docs close and the interface calm.</h1>
          <p>
            The documentation area remains a core part of the site, but now with a clearer hierarchy, lighter spacing, and better focus on the actual language content.
          </p>
        </div>
      </section>

      <section className="content-section shell-container docs-layout">
        <aside className="docs-sidebar">
          <label htmlFor="doc-selector">Section</label>
          <select
            id="doc-selector"
            value={selectedIndex}
            onChange={(event) => setSelectedIndex(Number(event.target.value))}
          >
            {sections.map((section, index) => (
              <option key={section.title} value={index}>
                {section.title}
              </option>
            ))}
          </select>

          <div className="docs-summary-card">
            <h2>{currentSection.title}</h2>
            <p>{currentSection.description}</p>
          </div>
        </aside>

        <div className="docs-content">
          {currentSection.content?.map((group: any) => (
            <article key={group.title} className="docs-block">
              <h3>{group.title}</h3>
              <div className="docs-items">
                {group.data.map((item: any, index: number) => {
                  if (item.link) {
                    return (
                      <a key={`${group.title}-${index}`} href={item.link} target="_blank" rel="noreferrer" className="docs-link-card">
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
      </section>
    </SiteShell>
  )
}
