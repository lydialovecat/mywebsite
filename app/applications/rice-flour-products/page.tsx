import type { Metadata } from "next";
import { ApplicationPage } from "../shared";

export const metadata: Metadata = {
  title: "Enzyme Solutions for Rice and Flour Based Foods",
  description:
    "Customized enzyme application support for rice products, flour-based foods, formulation stability, and process optimization.",
  alternates: { canonical: "/applications/rice-flour-products" },
};

export default function RiceFlourProductsPage() {
  return <ApplicationPage slug="rice-flour-products" />;
}
