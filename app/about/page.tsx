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
  orgSchema,
} from "../components";

export const metadata: Metadata = {
  title: "About Zhenrui Food | Food Enzyme Manufacturer",
  description:
    "Zhenrui Food is a Guangzhou food enzyme manufacturer and customized solution provider for bakery and rice or flour-based food products.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={[orgSchema(), breadcrumbSchema([{ label: "Home", href: "/" }, { label: "About", href: "/about" }])]} />
      <Header />
      <main>
        <Breadcrumbs items={[{ label: "About" }]} />
        <PageHero
          title="Food enzyme manufacturer focused on practical application support"
          text="Founded in 2018, Zhenrui Food specializes in food enzyme preparations for bakery, biscuits, bread, rice products, and flour-based food applications."
          image="/images/founder.webp"
        />
        <section className="section about-grid">
          <div>
            <h2>Professional, focused, innovative, win-win</h2>
            <p>
              Guangzhou ZhenRuiZhiChuang Biotech CO.,LTD. focuses on enzyme
              application research, product development, production support, and
              sales for baking and rice or noodle product industries.
            </p>
            <p>
              The company helps customers improve taste, flavor, appearance,
              mouthfeel, and process stability through natural enzyme
              preparations and customized solutions.
            </p>
          </div>
          <div className="stat-stack">
            <span>Source manufacturer</span>
            <span>OEM/ODM solution provider</span>
            <span>Application R&D support</span>
            <span>Asia, Middle East and Africa markets</span>
          </div>
        </section>
        <ContactSection />
      </main>
      <FloatingWhatsApp />
      <Footer />
    </>
  );
}
