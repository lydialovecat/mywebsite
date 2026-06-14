import Link from "next/link";
import { InquiryForm } from "./inquiry-form";
import { applications, faqs, navItems, products, site } from "./site-data";

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Zhenrui Food home">
        <img src={site.logo} alt="Zhenrui Food logo" />
      </Link>
      <nav className="main-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <Link className="header-cta" href="/contact">
        Get a Quote
      </Link>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <strong>{site.name}</strong>
        <p>{site.company}</p>
        <p>{site.address}</p>
      </div>
      <div className="footer-links">
        {navItems.slice(1).map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </div>
      <div className="footer-contact">
        <a href={`mailto:${site.email}`}>{site.email}</a>
        <a href={site.whatsappUrl} target="_blank" rel="noreferrer">
          WhatsApp: {site.whatsappDisplay}
        </a>
      </div>
    </footer>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <Link href="/">Home</Link>
      {items.map((item) => (
        <span key={item.label}>
          <span>/</span>
          {item.href ? <Link href={item.href}>{item.label}</Link> : <strong>{item.label}</strong>}
        </span>
      ))}
    </nav>
  );
}

export function PageHero({
  title,
  text,
  image,
  children,
}: {
  title: string;
  text: string;
  image?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="page-hero">
      <div>
        <h1>{title}</h1>
        <p>{text}</p>
        <div className="hero__actions">
          <Link className="button button--primary" href="/contact">
            Get a Quote
          </Link>
          <a className="button button--secondary" href={site.whatsappUrl} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a className="button button--quiet" href={site.catalog}>
            Download Catalog
          </a>
        </div>
        {children}
      </div>
      {image ? <img className="page-hero__image" src={image} alt="" /> : null}
    </section>
  );
}

export function ProductGrid() {
  return (
    <div className="product-grid">
      {products.map((item) => (
        <article className="product-card" key={item.slug}>
          <img src={item.image} alt={`${item.name} application image`} />
          <div>
            <span>{item.keyword}</span>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <Link href={`/products/${item.slug}`}>View product</Link>
          </div>
        </article>
      ))}
    </div>
  );
}

export function ApplicationGrid() {
  return (
    <div className="solution-grid">
      {applications.map((item) => (
        <Link className="solution-tile" key={item.slug} href={`/applications/${item.slug}`}>
          <span>{item.keyword}</span>
          <strong>{item.name}</strong>
          <p>{item.description}</p>
        </Link>
      ))}
      <Link className="solution-tile solution-tile--cta" href="/solutions/customized-enzyme-solutions">
        <span>Formula support</span>
        <strong>Ask for a customized enzyme solution</strong>
        <p>Send your product, country, and production problem for practical recommendation.</p>
      </Link>
    </div>
  );
}

export function FaqBlock({ productName }: { productName?: string }) {
  return (
    <section className="section faq-section">
      <div className="section-heading">
        <h2>{productName ? `${productName} FAQ` : "Buyer FAQ for Food Enzyme Sourcing"}</h2>
        <p>Clear answers help buyers and AI search engines understand the application, dosage, storage, and inquiry path.</p>
      </div>
      <div className="faq-list">
        {faqs.map((item) => (
          <details key={item.q} open>
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="section contact-band" id="contact-form">
      <div>
        <h2>Send a B2B inquiry to our technical team</h2>
        <p>
          Share your contact details, product requirement, and current production
          challenge. We will review the application and reply with a suitable
          enzyme solution, sample direction, or quotation.
        </p>
        <div className="contact__direct">
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={site.whatsappUrl} target="_blank" rel="noreferrer">
            WhatsApp: {site.whatsappDisplay}
          </a>
        </div>
      </div>
      <InquiryForm />
    </section>
  );
}

export function FloatingWhatsApp() {
  return (
    <a className="whatsapp-float" href={site.whatsappUrl} target="_blank" rel="noreferrer" aria-label="Contact Zhenrui Food on WhatsApp">
      WA
    </a>
  );
}

export function orgSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.company,
    alternateName: site.name,
    url: site.url,
    logo: `${site.url}${site.logo}`,
    foundingDate: site.founded,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Guangzhou",
      addressRegion: "Guangdong",
      addressCountry: "CN",
    },
    sameAs: [],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${site.url}/products?search={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function breadcrumbSchema(items: { label: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${site.url}${item.href}`,
    })),
  };
}
