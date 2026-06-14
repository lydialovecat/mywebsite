import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ContactSection,
  FloatingWhatsApp,
  Footer,
  Header,
  JsonLd,
  PageHero,
  breadcrumbSchema,
} from "../components";
import { resourceArticles, site } from "../site-data";

export const metadata: Metadata = {
  title: "Resources and Catalog Download | Zhenrui Food",
  description:
    "Download the Zhenrui Food catalog and review first-stage food enzyme resource topics for biscuit, bread, and industrial bakery manufacturers.",
  alternates: { canonical: "/download" },
};

export default function DownloadPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Resources", href: "/download" }])} />
      <Header />
      <main>
        <Breadcrumbs items={[{ label: "Resources" }]} />
        <PageHero
          title="Catalog and food enzyme resources"
          text="Download the product catalog and use the first resource topics as the foundation for SEO, AIO, GEO, and sales enablement content."
          image="/images/catalog-cover.webp"
        />
        <section className="section resource-grid">
          <article className="download-card">
            <img src="/images/catalog-cover.webp" alt="Zhenrui Food catalog cover" />
            <div>
              <h2>English Product Catalog</h2>
              <p>Food enzyme and bakery solution brochure for overseas B2B buyers.</p>
              <a className="button button--primary" href={site.catalog}>
                Download Catalog
              </a>
            </div>
          </article>
          <div className="info-block">
            <h2>Content roadmap</h2>
            <ul className="check-list">
              {resourceArticles.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link className="text-link" href="/contact">
              Request the biscuit enzyme selection guide
            </Link>
          </div>
        </section>
        <ContactSection />
      </main>
      <FloatingWhatsApp />
      <Footer />
    </>
  );
}
