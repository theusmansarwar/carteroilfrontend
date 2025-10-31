import { fetchProductsSlugs } from "@/DAL/Fetch";

export const dynamic = "force-dynamic";

export async function GET() {
  const baseUrl = "https://carteroilusa.com";
  const staticRoutes = [
    "",
    "products",
    "about-us",
    "contact-us",
    "history",
    "lube-guide",
    "equipment",
    "oil-and-gas-services",
    "pipes-and-tubing",
    "become-a-supplier",
    "terms-and-conditions",
    "privacy-policy",
  ];

  let productRoutes = [];
  try {
    const res = await fetchProductsSlugs();
    if (res?.slugs && Array.isArray(res.slugs)) {
      productRoutes = res.slugs.map((product) => `products/${product.slug}`);
    }
  } catch (error) {
    console.error("Error fetching product slugs:", error);
  }

  const allRoutes = [...staticRoutes, ...productRoutes];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes
    .map(
      (route) => `
    <url>
      <loc>${baseUrl}/${route}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.9</priority>
    </url>`
    )
    .join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
