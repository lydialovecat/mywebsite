import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="thank-you">
      <div className="thank-you__panel">
        <p className="section-kicker">Inquiry received</p>
        <h1>Thank you. Our sales team will contact you soon.</h1>
        <p>
          We will review your product requirement, country, and application
          details, then reply with a suitable enzyme solution.
        </p>
        <Link className="button button--primary" href="/">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
