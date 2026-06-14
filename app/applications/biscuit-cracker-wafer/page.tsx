import type { Metadata } from "next";
import { ApplicationPage } from "../shared";

export const metadata: Metadata = {
  title: "Enzyme for Biscuit, Cracker and Wafer Production",
  description:
    "Biscuit, cracker, cookie and wafer enzyme solutions for crispness, color, mouthfeel, dough handling, and production stability.",
  alternates: { canonical: "/applications/biscuit-cracker-wafer" },
};

export default function BiscuitCrackerWaferPage() {
  return <ApplicationPage slug="biscuit-cracker-wafer" />;
}
