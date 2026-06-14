import type { Metadata } from "next";
import {
  Breadcrumbs,
  ContactSection,
  FloatingWhatsApp,
  Footer,
  Header,
  JsonLd,
  PageHero,
  breadcrumbSchema,
} from "../../components";
import { site } from "../../site-data";

export const metadata: Metadata = {
  title: "Customized Food Enzyme Solutions for Bakery Manufacturers",
  description:
    "Get customized food enzyme formulation support for biscuit, bread, bakery, rice and flour-based food production problems.",
  alternates: { canonical: "/solutions/customized-enzyme-solutions" },
};

export default function CustomizedSolutionsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Customized Food Enzyme Solutions",
    provider: { "@type": "Organization", name: site.company },
    serviceType: "customized food enzyme solutions",
    description:
      "Formula diagnosis, product recommendation, process optimization, and OEM/ODM support for food enzyme applications.",
  };

  return (
    <>
      <JsonLd data={[schema, breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Customized Enzyme Solutions", href: "/solutions/customized-enzyme-solutions" }])]} />
      <Header />
      <main>
        <Breadcrumbs items={[{ label: "Solutions", href: "/solutions/customized-enzyme-solutions" }, { label: "Customized Enzyme Solutions" }]} />
        <PageHero
          title="Customized Food Enzyme Solutions"
          text="Send your formula problem, product type, country, and target result. Zhenrui Food helps match practical enzyme preparations for bakery and flour-based food production."
          image="/images/catalog-rd.webp"
        />
        <section className="section process-grid">
          {[
            ["1. Diagnose", "We review your production issue, product type, and target texture."],
            ["2. Recommend", "We match enzyme preparations or emulsifier products for the application."],
            ["3. Test", "Application testing can support dosage, process, and quality improvement."],
            ["4. Quote", "Sales follow up with packaging, lead time, sample, and quote details."],
          ].map(([title, text]) => (
            <div className="info-block" key={title}>
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
          ))}
        </section>
        <section className="section ads-panel">
          <h2>Built for SEO and paid ads conversion</h2>
          <p>
            This page is the main conversion landing page for keywords such as
            food enzyme manufacturer China, bakery enzyme manufacturer, biscuit
            enzyme supplier, and bread enzyme supplier.
          </p>
        </section>
        <ContactSection />
      </main>
      <FloatingWhatsApp />
      <Footer />
    </>
  );
}
