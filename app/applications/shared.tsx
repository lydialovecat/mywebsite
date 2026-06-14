import Link from "next/link";
import {
  Breadcrumbs,
  ContactSection,
  FloatingWhatsApp,
  Footer,
  Header,
  JsonLd,
  PageHero,
  ProductGrid,
  breadcrumbSchema,
} from "../components";
import { applications, site } from "../site-data";

export function ApplicationPage({ slug }: { slug: string }) {
  const application = applications.find((item) => item.slug === slug)!;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${application.name} Enzyme Solution`,
    provider: { "@type": "Organization", name: site.company },
    areaServed: ["Vietnam", "Malaysia", "Thailand", "Japan", "South Korea", "Middle East", "Asia", "Africa"],
    serviceType: application.keyword,
    description: application.description,
  };

  return (
    <>
      <JsonLd data={[schema, breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Applications", href: `/applications/${application.slug}` }, { label: application.name, href: `/applications/${application.slug}` }])]} />
      <Header />
      <main>
        <Breadcrumbs items={[{ label: "Applications", href: "/applications/biscuit-cracker-wafer" }, { label: application.name }]} />
        <PageHero title={`${application.name} Enzyme Solutions`} text={application.description} image={application.image} />
        <section className="section detail-grid">
          <div className="info-block">
            <h2>Common buyer problems</h2>
            <ul className="check-list">
              {application.pains.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="info-block">
            <h2>Recommended product direction</h2>
            <ul className="check-list">
              {application.recommendedProducts.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="spec-panel">
            <h2>How we support this application</h2>
            <p>We review your product type, formula issue, process temperature, raw material fluctuation, and target texture before recommending a practical enzyme solution.</p>
            <Link className="text-link" href="/solutions/customized-enzyme-solutions">
              Ask for formula support
            </Link>
          </div>
        </section>
        <section className="section product-strip">
          <div className="section-heading">
            <h2>Related products</h2>
            <p>Start from a core product page, then send your application details for a more precise recommendation.</p>
          </div>
          <ProductGrid />
        </section>
        <ContactSection />
      </main>
      <FloatingWhatsApp />
      <Footer />
    </>
  );
}
