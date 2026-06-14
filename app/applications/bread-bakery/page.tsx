import type { Metadata } from "next";
import { ApplicationPage } from "../shared";

export const metadata: Metadata = {
  title: "Enzyme for Bread Softness and Bakery Production",
  description:
    "Bread and bakery enzyme solutions for softness, moisture retention, dough handling, and shelf-life improvement.",
  alternates: { canonical: "/applications/bread-bakery" },
};

export default function BreadBakeryPage() {
  return <ApplicationPage slug="bread-bakery" />;
}
