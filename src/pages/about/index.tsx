import SiteShell from '../../components/SiteShell'
import { aboutSections } from '../../data/site'

export default function About() {
  return (
    <SiteShell>
      <section className="page-hero shell-container page-hero-compact">
        <span className="eyebrow">About the project</span>
        <h1>The language stays expressive. The site gets quieter.</h1>
        <p>
          This version keeps the identity of Zumbra, but removes the heavy visual clutter so the project feels more mature, modern, and easier to trust at first glance.
        </p>
      </section>

      <section className="content-section shell-container narrative-grid">
        {aboutSections.map((section) => (
          <article key={section.title} className="feature-card">
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </article>
        ))}
      </section>
    </SiteShell>
  )
}
