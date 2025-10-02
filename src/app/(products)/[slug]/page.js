import Faqs from "@/components/Faqs/Faqs";
import Benefits from "@/components/ServicePageTemplate/Benefits";
import BuildingQuality from "@/components/ServicePageTemplate/BuildingQuality";
import Carousal from "@/components/ServicePageTemplate/Carousal";
import Performance from "@/components/ServicePageTemplate/Performance";
import ProductsSection from "@/components/ServicePageTemplate/ProductsSection";
import ServiceHero from "@/components/ServicePageTemplate/ServiceHero";
import { fetchProductBySlug } from "@/DAL/Fetch";

/** ---------------------------------------------------------------
 * Fetch service by slug
 * --------------------------------------------------------------- */
async function getProduct(slug) {
  try {
    const res = await fetchProductBySlug(slug);
    console.log({ qwertyuqwertyui: res });
    if (res?.product) return res.product;

    return null;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

/** ---------------------------------------------------------------
 * Dynamic <title> and <meta description>
 * --------------------------------------------------------------- */
export async function generateMetadata({ params }) {
  const slug = params.slug;

  const product = await getProduct(slug);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "This Product is currently unavailable.",
      icons: { icon: "/favicon.svg" },
    };
  }

  return {
    title: product.title,
    description: product.metaDescription,
    icons: { icon: "/favicon.svg" },
  };
}

/** ---------------------------------------------------------------
 * Page Component
 * --------------------------------------------------------------- */
const Page = async ({ params }) => {
  const product = await getProduct(params.slug);

  if (!product) {
    return (
      <div style={{ padding: "20px 0" }}>
        <h2>Product not found</h2>
      </div>
    );
  }

  const heroData = [
    {
      title: "Automotive Lubricants",
      description:
        "Carter Oil has powered global industries since 1893, when John Joyce Carter founded a pioneering company that shaped energy markets and advanced reliable lubrication solutions.",
      backgroundImage: "/service-hero.jpg",
    },
  ];

  return (
    <div>
      <ServiceHero data={product} />

      {product.innovation?.published && (
        <BuildingQuality data={product.innovation} />
      )}

      {product.subproducts?.published && (
        <ProductsSection title={product.title} data={product.subproducts} />
      )}
      {/* <Carousal /> */}
      {product.benefits?.published && <Benefits data={product.benefits} />}
      {product.performance?.published && <Performance data={product.performance} />}
    
      {product.faqs?.published && <Faqs data={product.faqs} />}
    </div>
  );
};

export default Page;
