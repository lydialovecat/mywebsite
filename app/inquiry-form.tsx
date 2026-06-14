"use client";

import { FormEvent, useMemo, useState } from "react";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  company: string;
  country: string;
  productRequirement: string;
  message: string;
  website: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  company: "",
  country: "",
  productRequirement: "",
  message: "",
  website: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^\+?[0-9][0-9\s().-]{6,24}$/;

export function InquiryForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");
  const startedAt = useMemo(() => Date.now().toString(), []);

  function updateField(field: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: "" }));
    if (status !== "idle") {
      setStatus("idle");
      setFeedback("");
    }
  }

  function validate() {
    const nextErrors: FormErrors = {};

    if (!values.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!values.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!emailPattern.test(values.email.trim())) {
      nextErrors.email = "Please enter a valid business email address.";
    }

    if (!values.phone.trim()) {
      nextErrors.phone = "Please enter your phone or WhatsApp number.";
    } else if (!phonePattern.test(values.phone.trim())) {
      nextErrors.phone = "Use an international format, for example +86 138 0000 0000.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!validate()) {
      setStatus("error");
      setFeedback("Please complete all required fields before submitting.");
      return;
    }

    setStatus("submitting");
    setFeedback("Submitting your inquiry...");

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, startedAt }),
      });

      const result = (await response.json()) as { ok?: boolean; message?: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.message || "Submission failed.");
      }

      setValues(initialValues);
      setErrors({});
      setStatus("success");
      setFeedback("Submitted successfully. Our technical team will contact you soon.");
    } catch {
      setStatus("error");
      setFeedback("Submission failed. Please email us directly or try again later.");
    }
  }

  return (
    <form className="inquiry-form inquiry-form--b2b" onSubmit={handleSubmit} noValidate>
      <input
        className="form-honeypot"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        value={values.website}
        onChange={(event) => updateField("website", event.target.value)}
        aria-hidden="true"
      />
      <input type="hidden" name="startedAt" value={startedAt} />

      <label>
        <span>
          Name <em>*</em>
        </span>
        <input
          name="name"
          type="text"
          value={values.name}
          onChange={(event) => updateField("name", event.target.value)}
          placeholder="Your full name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          required
        />
        {errors.name ? <small id="name-error">{errors.name}</small> : <small>Required</small>}
      </label>

      <label>
        <span>
          Email <em>*</em>
        </span>
        <input
          name="email"
          type="email"
          value={values.email}
          onChange={(event) => updateField("email", event.target.value)}
          placeholder="name@company.com"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          required
        />
        {errors.email ? <small id="email-error">{errors.email}</small> : <small>Required, business email preferred</small>}
      </label>

      <label>
        <span>
          Phone / WhatsApp <em>*</em>
        </span>
        <input
          name="phone"
          type="tel"
          value={values.phone}
          onChange={(event) => updateField("phone", event.target.value)}
          placeholder="+86 138 0000 0000"
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          required
        />
        {errors.phone ? <small id="phone-error">{errors.phone}</small> : <small>Required, international format supported</small>}
      </label>

      <label>
        <span>Company Name</span>
        <input
          name="company"
          type="text"
          value={values.company}
          onChange={(event) => updateField("company", event.target.value)}
          placeholder="Your company name"
        />
        <small>Optional</small>
      </label>

      <label>
        <span>Country / Region</span>
        <input
          name="country"
          type="text"
          value={values.country}
          onChange={(event) => updateField("country", event.target.value)}
          placeholder="Malaysia, Vietnam, UAE..."
        />
        <small>Optional</small>
      </label>

      <label>
        <span>Product Requirement</span>
        <input
          name="productRequirement"
          type="text"
          value={values.productRequirement}
          onChange={(event) => updateField("productRequirement", event.target.value)}
          placeholder="Biscuit enzyme, bread enzyme, customized formula..."
        />
        <small>Optional</small>
      </label>

      <label className="form-wide">
        <span>Message</span>
        <textarea
          name="message"
          rows={5}
          value={values.message}
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="Tell us your product type, current problem, target result, and expected order quantity."
        />
        <small>Optional, but more detail helps us recommend the right solution</small>
      </label>

      <div className={`form-feedback form-feedback--${status}`} role="status" aria-live="polite">
        {feedback || "Required fields are marked with *."}
      </div>

      <button className="button button--primary form-wide" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting..." : "Submit Inquiry"}
      </button>
    </form>
  );
}
