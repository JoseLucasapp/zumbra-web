import { Link } from 'react-router-dom'
import SiteShell from '../../components/SiteShell'
import { externalLinks, highlights, principles, stats } from '../../data/site'

import './style.css'

const CURRENT_VERSION = '0.1.4'
const DISCORD_LINK = 'https://discord.gg/6HFk38zY8Z'

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
            <strong>Zumbra {CURRENT_VERSION}</strong>
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
            <span className="eyebrow">Official editor</span>
            <h2>ZumbroIDE is part of the Zumbra ecosystem.</h2>
          </div>
          <a
            href="https://github.com/JoseLucasapp/zumbroide"
            target="_blank"
            rel="noreferrer"
            className="inline-link"
          >
            View repository
          </a>
        </div>

        <div className="zumbroide-card">
          <div className="zumbroide-copy">
            <p className="zumbroide-text">
              ZumbroIDE is a lightweight terminal-based editor written in C, built for speed, simplicity,
              and hackability. It is designed both as a practical coding tool and as a way to understand
              how editors work under the hood.
            </p>

            <div className="zumbroide-points">
              <div className="zumbroide-point">Fast terminal rendering</div>
              <div className="zumbroide-point">Syntax highlighting for C and Zumbra</div>
              <div className="zumbroide-point">Live search and incremental save</div>
              <div className="zumbroide-point">Pure ANSI C with zero external dependencies</div>
              <div className="zumbroide-point">Small binary, clean modular architecture</div>
              <div className="zumbroide-point">Linux, macOS, and WSL2 support</div>
            </div>

            <div className="hero-actions">
              <a
                className="button button-primary"
                href="https://github.com/JoseLucasapp/zumbroide"
                target="_blank"
                rel="noreferrer"
              >
                Explore ZumbroIDE
              </a>
            </div>
          </div>

          <div className="zumbroide-visual">
            <div className="zumbroide-logo-wrap">
              <img
                src="/zumbroide-logo.png"
                alt="ZumbroIDE logo"
                className="zumbroide-logo"
              />
            </div>
            <div className="hero-note">
              <span className="dot" />
              A lightweight editor for Zumbra and low-level tooling enthusiasts.
            </div>
          </div>
        </div>
      </section>

      <section className="content-section shell-container">
        <div className="community-card">
          <div className="community-copy">
            <span className="eyebrow">Community</span>
            <h2>Join the Zumbra Discord community.</h2>
            <p className="community-text">
              Talk about the language, share ideas, discuss features, follow updates,
              and connect with people building with Zumbra and ZumbroIDE.
            </p>

            <div className="community-points">
              <div className="community-point">Language discussions</div>
              <div className="community-point">Feature ideas and feedback</div>
              <div className="community-point">ZumbroIDE updates</div>
              <div className="community-point">Docs, examples, and support</div>
            </div>

            <div className="hero-actions">
              <a
                className="button button-primary"
                href={DISCORD_LINK}
                target="_blank"
                rel="noreferrer"
              >
                Join Discord
              </a>
            </div>
          </div>

          <div className="community-visual">
            <div className="community-badge-card">
              <div className="community-badge">
                <span className="community-badge-dot" />
                Discord community
              </div>
              <p className="community-visual-text">
                Build the ecosystem together.
              </p>
            </div>
          </div>
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