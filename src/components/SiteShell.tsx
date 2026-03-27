import { Link, NavLink } from 'react-router-dom'
import { ReactNode, useState } from 'react'
import { externalLinks, navItems } from '../data/site'

type SiteShellProps = {
  children: ReactNode
}

export default function SiteShell({ children }: SiteShellProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="shell-container header-inner">
          <Link to="/" className="brand" aria-label="Zumbra home">
            <img src="/zumbra-mark.png" alt="Zumbra logo" className="brand-mark" />
            <div className="brand-copy">
              <strong>Zumbra</strong>
              <span>Programming language</span>
            </div>
          </Link>

          <button
            className="mobile-toggle"
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
          </button>

          <nav className={`site-nav ${open ? 'is-open' : ''}`}>
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <a className="nav-link nav-link-external" href={externalLinks.repo} target="_blank" rel="noreferrer">
              Repository
            </a>
            <a className="button button-primary nav-cta" href={externalLinks.releases} target="_blank" rel="noreferrer">
              Download
            </a>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="shell-container footer-inner">
          <div>
            <p className="footer-title">Zumbra</p>
            <p className="footer-text">Minimal language branding, focused documentation, and a cleaner product presentation.</p>
          </div>
          <div className="footer-links">
            <a href={externalLinks.repo} target="_blank" rel="noreferrer">GitHub</a>
            <a href={externalLinks.releases} target="_blank" rel="noreferrer">Releases</a>
            <Link to="/docs">Documentation</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
