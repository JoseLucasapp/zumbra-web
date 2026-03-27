import { Link } from 'react-router-dom'
import SiteShell from '../../components/SiteShell'
import { externalLinks, highlights, principles, stats } from '../../data/site'

const CURRENT_VERSION = import.meta.env.VITE_VERSION

export default function Home() {
  return (
    <SiteShell>
      <section className="hero-section shell-container">
        <div className="hero-copy">
          <div className="hero-meta">
            <span className="version-badge">v{CURRENT_VERSION}</span>
          </div>

          <span className="eyebrow">Zebra-inspired language design</span>
          <h1>A cleaner home for Zumbra.</h1>
          <p className="hero-text">
            A lighter, more minimal presentation for the language, white-first, documentation-friendly, and centered on clarity.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href={externalLinks.releases} target="_blank" rel="noreferrer">
              Download Zumbra
            </a>
            <Link className="button button-secondary" to="/docs">
              Read the docs
            </Link>
          </div>

          <div className="hero-release">
            <span className="release-label">Latest release</span>
            <strong> Zumbra {CURRENT_VERSION}</strong>
          </div>

          <div className="stats-grid">
            {stats.map((item) => (
              <div key={item.label} className="stat-card">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-logo-card">
            <img src="/zumbra-lockup.png" alt="Zumbra programming language logo" className="hero-lockup" />
          </div>
          <div className="hero-note">
            <span className="dot" />
            Purple and deep navy from the new logo drive the accent system.
          </div>
        </div>
      </section>

      <section className="content-section shell-container two-column-grid">
        <div>
          <span className="eyebrow">Core direction</span>
          <h2>Minimal, technical, and easier to scan.</h2>
        </div>

        <div className="principles-list">
          {principles.map((item) => (
            <div key={item} className="principle-item">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="content-section shell-container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Why this redesign works</span>
            <h2>Less visual noise, stronger product feel.</h2>
          </div>
          <Link to="/about" className="inline-link">
            Learn more
          </Link>
        </div>

        <div className="feature-grid">
          {highlights.map((item) => (
            <article key={item.title} className="feature-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  )
}