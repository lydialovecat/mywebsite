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
} from "../components";
import { site } from "../site-data";

export const metadata: Metadata = {
  title: "Quality and R&D Testing for Food Enzyme Products",
  description:
    "Zhenrui Food quality and R&D capabilities include enzyme activity, microbial, heavy metal, baking, biscuit, noodle, frying, and sensory evaluation tests.",
  alternates: { canonical: "/quality-rd" },
};

export default function QualityRdPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Quality and R&D Testing",
    url: `${site.url}/quality-rd`,
  };

  return (
    <>
      <JsonLd data={[schema, breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Quality & R&D", href: "/quality-rd" }])]} />
      <Header />
      <main>
        <Breadcrumbs items={[{ label: "Quality & R&D" }]} />
        <PageHero
          title="Quality control and R&D testing for serious food manufacturers"
          text="Use real testing and application capability to support food enzyme recommendations, quality control, and formula problem diagnosis."
          image="/images/catalog-quality-products.webp"
        />
        <section className="section quality-lab">
          {[
            ["Enzyme Activity Test", "Measure enzyme activity for product consistency."],
            ["Microbial Test", "Support food safety control during production."],
            ["Heavy Metal Test", "Check product safety indicators for buyer confidence."],
            ["Biscuit Experiment", "Validate biscuit texture, color, crispness, and breakage issues."],
            ["Noodle Experiment", "Support rice and flour-based product application testing."],
            ["Sensory Evaluation", "Evaluate mouthfeel, taste, and final product performance."],
          ].map(([title, text]) => (
            <article className="info-block" key={title}>
              <h2>{title}</h2>
              <p>{text}</p>
            </article>
          ))}
        </section>
        <ContactSection />
      </main>
      <FloatingWhatsApp />
      <Footer />
    </>
  );
}
