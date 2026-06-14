import Link from "next/link";
import {
  ContactSection,
  FloatingWhatsApp,
  Footer,
  Header,
  JsonLd,
  orgSchema,
  websiteSchema,
} from "./components";

const challenges = [
  {
    title: "Product Quality Is Inconsistent",
    text: "Variations in texture, appearance, and performance can lead to customer complaints and production losses.",
  },
  {
    title: "Product Freshness Is Difficult to Maintain",
    text: "Bread products may stale too quickly, reducing shelf life and customer satisfaction.",
  },
  {
    title: "Formulas Require Constant Adjustments",
    text: "Manufacturers often struggle to maintain stable product performance while controlling costs.",
  },
  {
    title: "New Product Development Takes Too Long",
    text: "Bringing innovative products to market requires technical expertise and reliable support.",
  },
  {
    title: "Production Problems Affect Efficiency",
    text: "Processing issues can increase waste, reduce productivity, and impact profitability.",
  },
  {
    title: "Technical Support Is Often Limited",
    text: "Many suppliers provide ingredients but not practical solutions.",
  },
];

const supportItems = [
  ["Formula Optimization", "Improve ingredient functionality, product consistency, and production performance."],
  ["Product Development Support", "Accelerate innovation and reduce development risks."],
  ["Production Troubleshooting", "Identify root causes and implement practical solutions."],
  ["Process Improvement", "Enhance efficiency and improve manufacturing consistency."],
  ["Customized Enzyme Solutions", "Recommendations tailored to your products, processes, and goals."],
  ["Professional Technical Support", "Access expert guidance from specialists experienced in food manufacturing applications."],
];

const applications = [
  ["Bread Production", "Improve softness, moisture retention, freshness, loaf volume, and shelf-life performance.", "/images/product-chf300.webp"],
  ["Biscuit Manufacturing", "Enhance texture, crispness, processing performance, and product consistency.", "/images/product-biscuits.webp"],
  ["Rice Product Processing", "Improve product quality, processing stability, and consumer appeal.", "/images/catalog-rd.webp"],
  ["Flour Product Manufacturing", "Optimize dough handling, structure, and production efficiency.", "/images/bakery-collage.webp"],
  ["Fried Food Applications", "Support product quality and manufacturing consistency.", "/images/catalog-quality-products.webp"],
  ["Specialty Food Products", "Customized enzyme solutions developed for unique production requirements.", "/images/product-emulsifiers.webp"],
];

const products = [
  ["Bread Moisturizing Enzyme", "Improve softness, moisture retention, and freshness.", "/products/bread-moisturizing-enzyme-chf300"],
  ["Compound Enzyme Preparation", "Customized multi-enzyme systems for complex production challenges.", "/solutions/customized-enzyme-solutions"],
  ["Special Enzyme for Tough Biscuits", "Improve dough performance, structure, and manufacturing consistency.", "/products/enzymes-for-biscuits"],
  ["Special Enzyme for Crispy Biscuits", "Enhance crispness, texture, and consumer satisfaction.", "/products/enzymes-for-biscuits"],
  ["Special Enzyme for Soda Crackers", "Support fermentation performance and product quality.", "/products/enzymes-for-biscuits"],
  ["Special Enzyme for Wafer Biscuits", "Improve wafer sheet quality, crispness, and production efficiency.", "/products/enzymes-for-biscuits"],
];

const reasons = [
  ["Industry-Focused Expertise", "Dedicated to bakery, biscuit, rice product, and flour-based food applications."],
  ["Customized Solutions", "Every production process is different. We develop recommendations tailored to your specific challenges."],
  ["Strong Technical Support", "Our specialists provide practical guidance from product development to commercial production."],
  ["Continuous Innovation", "We invest in research and development to create effective and sustainable enzyme solutions."],
  ["Proven Problem-Solving Approach", "We help manufacturers improve quality, reduce variability, and optimize production."],
  ["Long-Term Partnership", "Your success is our success. We focus on building lasting relationships through reliable support and service."],
];

const testimonials = [
  {
    quote:
      "Our bread products became noticeably softer and maintained freshness longer. The technical support from ZhenRuiZhiChuang helped us improve both product quality and customer satisfaction.",
    name: "Production Manager",
    role: "Commercial Bakery",
  },
  {
    quote:
      "We struggled with inconsistent biscuit texture across multiple production lines. Their enzyme solution and application guidance significantly improved consistency.",
    name: "R&D Manager",
    role: "Biscuit Manufacturer",
  },
  {
    quote:
      "The team helped us optimize our formulation and solve several production challenges. Their technical expertise made a measurable difference.",
    name: "Operations Director",
    role: "Food Processing Company",
  },
];

const faqs = [
  ["What are food enzymes?", "Food enzymes are natural proteins that improve processing performance, texture, freshness, and product quality."],
  ["Can enzymes improve bread freshness?", "Yes. Specialized enzyme systems can improve moisture retention and delay staling."],
  ["Can enzymes improve biscuit texture?", "Absolutely. Enzymes can enhance crispness, structure, and overall eating quality."],
  ["Do you provide technical support?", "Yes. Technical consultation and application support are core parts of our service."],
  ["Can you help optimize existing formulations?", "Yes. We regularly help manufacturers improve formulations and production performance."],
  ["Do you offer customized enzyme solutions?", "Yes. Recommendations are tailored to specific products, processes, and business objectives."],
];

function homeFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={[orgSchema(), websiteSchema(), homeFaqSchema()]} />
      <Header />
      <main className="home-v2">
        <section className="home-v2-hero">
          <div className="home-v2-hero__copy">
            <h1>Improve Product Quality with Advanced Enzyme Solutions</h1>
            <h2>Helping Food Manufacturers Improve Freshness, Texture, Consistency, and Production Efficiency</h2>
            <p>
              Food manufacturers face increasing pressure to deliver better products,
              maintain consistent quality, accelerate innovation, and improve
              operational efficiency.
            </p>
            <p>
              At ZhenRuiZhiChuang, we help bakery, biscuit, rice product, and
              flour-based food manufacturers overcome production challenges through
              advanced enzyme technology and professional technical support.
            </p>
            <strong>Help You Create Better Products and Achieve Better Manufacturing Results</strong>
            <div className="hero__actions">
              <Link className="button button--primary" href="/contact">
                Request Technical Consultation
              </Link>
              <Link className="button button--secondary" href="/contact">
                Discuss Your Application
              </Link>
            </div>
          </div>
          <div className="home-v2-hero__image">
            <img src="/images/home-banner.png" alt="Food production line for enzyme application" />
          </div>
        </section>

        <section className="home-v2-section home-v2-products">
          <div className="home-v2-heading">
            <h2>Advanced Enzyme Solutions for Food Manufacturers</h2>
            <p>Focused products for bread, biscuits, crackers, wafers, and customized food manufacturing challenges.</p>
          </div>
          <div className="home-v2-product-grid">
            {products.map(([title, text, href]) => (
              <Link className="home-v2-product-card" href={href} key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
                <span>LEARN MORE &gt;&gt;</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="home-v2-quote-strip">
          <div>
            <h2>Ready to improve quality, freshness, and processing stability?</h2>
            <p>Work with an enzyme application team offering technical support from formulation to commercial production.</p>
          </div>
          <Link className="button button--primary" href="/contact">
            Quote Now
          </Link>
        </section>

        <section className="home-v2-section">
          <div className="home-v2-heading">
            <h2>Common Production Challenges We Help You Solve</h2>
            <p>Whether you produce bread, biscuits, rice products, or flour-based foods, manufacturing challenges can impact quality, efficiency, and profitability.</p>
          </div>
          <div className="home-v2-feature-list">
            {challenges.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="home-v2-section home-v2-dark">
          <div className="home-v2-heading">
            <h2>How We Help Food Manufacturers Succeed</h2>
          </div>
          <div className="home-v2-feature-list">
            {supportItems.map(([title, text]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="home-v2-section home-v2-about">
          <div>
            <h2>A Technical Partner You Can Rely On</h2>
            <p>
              ZhenRuiZhiChuang is a biotechnology company specializing in enzyme
              solutions for bakery, biscuit, rice product, and flour-based food
              manufacturers. We help food producers improve product quality,
              optimize formulations, solve production challenges, and accelerate
              innovation through advanced enzyme technology and professional
              technical support.
            </p>
            <ul>
              <li>Formula optimization and troubleshooting</li>
              <li>Application-focused product development</li>
              <li>Long-term technical support for food manufacturers</li>
            </ul>
            <Link className="text-link" href="/about">
              More about us
            </Link>
          </div>
          <img src="/images/catalog-rd.webp" alt="Food application laboratory and testing capabilities" />
        </section>

        <section className="home-v2-section home-v2-gallery">
          <div className="home-v2-heading">
            <h2>Enzyme Solutions for Diverse Food Manufacturing Applications</h2>
          </div>
          <div className="home-v2-application-grid">
            {applications.map(([title, text, image]) => (
              <article key={title}>
                <img src={image} alt={title} />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="home-v2-section">
          <div className="home-v2-heading">
            <h2>Why Food Manufacturers Choose ZhenRuiZhiChuang</h2>
          </div>
          <div className="home-v2-feature-list">
            {reasons.map(([title, text]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="home-v2-section home-v2-testimonials">
          <div className="home-v2-heading">
            <h2>Customer Success Stories</h2>
          </div>
          <div className="home-v2-testimonial-grid">
            {testimonials.map((item) => (
              <blockquote key={item.name}>
                <p>“{item.quote}”</p>
                <footer>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="home-v2-section home-v2-faq">
          <div className="home-v2-heading">
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="faq-list">
            {faqs.map(([question, answer]) => (
              <details key={question} open>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="home-v2-final">
          <h2>Ready to Improve Product Quality and Production Performance?</h2>
          <p>
            Whether you need help improving freshness, optimizing formulations,
            solving production challenges, or developing innovative products,
            ZhenRuiZhiChuang is ready to help.
          </p>
          <strong>Partner with a Team That Understands Food Manufacturing and Delivers Practical Solutions</strong>
          <div className="hero__actions">
            <Link className="button button--primary" href="/contact">
              Request Technical Consultation
            </Link>
            <Link className="button button--secondary" href="/contact">
              Contact Our Technical Team
            </Link>
            <Link className="button button--quiet" href="/contact">
              Send an Inquiry
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
