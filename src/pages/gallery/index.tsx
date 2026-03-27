import SiteShell from '../../components/SiteShell'
import { galleryItems } from '../../data/site'

export default function Gallery() {
  return (
    <SiteShell>
      <section className="page-hero shell-container page-hero-compact">
        <span className="eyebrow">Brand assets</span>
        <h1>Logo directions ready for product surfaces.</h1>
        <p>
          A simple gallery focused on the new identity instead of decorative photos, keeping the brand system closer to a real language and tooling ecosystem.
        </p>
      </section>

      <section className="content-section shell-container logo-gallery">
        {galleryItems.map((item) => (
          <article key={item.title} className="gallery-card">
            <div className="gallery-image-wrap">
              <img src={item.src} alt={item.title} />
            </div>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </article>
        ))}
      </section>
    </SiteShell>
  )
}
