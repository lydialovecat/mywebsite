import type { Metadata } from "next";
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
import { products, site } from "../site-data";

export const metadata: Metadata = {
  title: "Food Enzyme Products for Bakery and Food Processing",
  description:
    "Explore biscuit enzyme, bread moisturizing enzyme, and compound bakery emulsifier products from Zhenrui Food.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Food Enzyme Products",
    url: `${site.url}/products`,
    mainEntity: products.map((item) => ({
      "@type": "Product",
      name: item.name,
      image: `${site.url}${item.image}`,
      description: item.description,
      brand: { "@type": "Brand", name: site.name },
    })),
  };

  return (
    <>
      <JsonLd data={[schema, breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Products", href: "/products" }])]} />
      <Header />
      <main>
        <Breadcrumbs items={[{ label: "Products" }]} />
        <PageHero
          title="Food Enzyme Products for Bakery and Food Processing"
          text="Choose from biscuit enzyme solutions, bread moisturizing enzyme, and bakery emulsifier products for industrial food manufacturing."
          image="/images/product-strip.webp"
        />
        <section className="section product-strip">
          <ProductGrid />
        </section>
        <ContactSection />
      </main>
      <FloatingWhatsApp />
      <Footer />
    </>
  );
}
