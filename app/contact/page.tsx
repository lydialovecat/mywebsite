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
  title: "B2B Inquiry Form | Contact Zhenrui Food",
  description:
    "Send a B2B inquiry to Zhenrui Food for biscuit enzyme, bread moisturizing enzyme, bakery emulsifier, customized formula support, samples, and quotes.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Contact", href: "/contact" }])} />
      <Header />
      <main>
        <Breadcrumbs items={[{ label: "Contact" }]} />
        <PageHero
          title="B2B Inquiry Form for Food Enzyme Solutions"
          text={`Send your product requirement to ${site.email} or complete the form below. Our technical team will review your application and follow up with a practical enzyme solution.`}
          image="/images/catalog-cover.webp"
        />
        <ContactSection />
      </main>
      <FloatingWhatsApp />
      <Footer />
    </>
  );
}
