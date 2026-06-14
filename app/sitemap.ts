import type { MetadataRoute } from "next";
import { applications, products, site } from "./site-data";

const staticRoutes = [
  "",
  "/products",
  "/applications/biscuit-cracker-wafer",
  "/applications/bread-bakery",
  "/applications/rice-flour-products",
  "/solutions/customized-enzyme-solutions",
  "/about",
  "/quality-rd",
  "/contact",
  "/download",
  "/thank-you",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ...staticRoutes,
    ...products.map((item) => `/products/${item.slug}`),
    ...applications.map((item) => `/applications/${item.slug}`),
  ];

  return Array.from(new Set(routes)).map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date("2026-06-13"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.includes("thank-you") ? 0.1 : 0.75,
  }));
}
