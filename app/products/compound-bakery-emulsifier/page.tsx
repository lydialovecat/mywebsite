import type { Metadata } from "next";
import {
  Breadcrumbs,
  ContactSection,
  FaqBlock,
  FloatingWhatsApp,
  Footer,
  Header,
  JsonLd,
  PageHero,
  breadcrumbSchema,
  faqSchema,
} from "../../components";
import { products, site } from "../../site-data";

const product = products.find((item) => item.slug === "compound-bakery-emulsifier")!;

export const metadata: Metadata = {
  title: "Compound Bakery Emulsifier | Bakery Food Emulsifier",
  description:
    "Compound bakery emulsifier for biscuits, bread, softness, rise, structure, machine production stability, and shelf-life performance.",
  alternates: { canonical: "/products/compound-bakery-emulsifier" },
};

export default function CompoundBakeryEmulsifierPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: `${site.url}${product.image}`,
    description: product.description,
    brand: { "@type": "Brand", name: site.name },
    manufacturer: { "@type": "Organization", name: site.company },
  };

  return (
    <>
      <JsonLd data={[schema, faqSchema(), breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: product.name, href: `/products/${product.slug}` }])]} />
      <Header />
      <main>
        <Breadcrumbs items={[{ label: "Products", href: "/products" }, { label: product.name }]} />
        <PageHero title={product.name} text={product.description} image={product.image} />
        <section className="section detail-grid">
          <InfoBlock title="Production problems it solves" items={product.problems} />
          <InfoBlock title="Main benefits" items={product.benefits} />
          <InfoBlock title="Food products it is used for" items={product.applications} />
          <div className="spec-panel">
            <h2>Dosage, packaging, and shelf life</h2>
            <p><strong>Recommended dosage:</strong> {product.dosage}</p>
            <p><strong>Packaging:</strong> {product.packaging}</p>
            <p><strong>Storage and shelf life:</strong> {product.shelfLife}</p>
            <p><strong>Models:</strong> {product.models.join(", ")}</p>
          </div>
        </section>
        <FaqBlock productName={product.shortName} />
        <ContactSection />
      </main>
      <FloatingWhatsApp />
      <Footer />
    </>
  );
}

function InfoBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="info-block">
      <h2>{title}</h2>
      <ul className="check-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
