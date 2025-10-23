import Faqs from "@/components/Faqs/Faqs";
import Hero2 from "@/components/Hero2/Hero2";
import OurPartner from "@/components/Piping&Tubing/OurPartner";
import BuildingQuality from "@/components/ServicePageTemplate/BuildingQuality";
import Carousal from "@/components/ServicePageTemplate/Carousal";
import Performance from "@/components/ServicePageTemplate/Performance";

export const metadata = {
  title: "Piping & Tubing | Carter Oil",
  description:
    "Contact Carteroil’s team for reliable lubrication solutions and oilfield services designed to improve performance and protect your equipment.",
};
const heroData = [
  {
    title: "Piping & Tubing",
    description:
      "Carteroil has powered global industries since 1893. John Joyce Carter founded a company that shaped the energy market and developed reliable lubrication solutions. Contact us today and take the next step toward dependable support for your business.",
    backgroundImage: "/contact-us.webp",
  },
];
const performance = {
  title: "lorem Ipsum wqyuwyie wkdal",
  description:
    "Carteroil has powered global industries since 1893. John Joyce Carter founded a company that shaped the energy market and developed reliable lubrication solutions. Contact us today and take the next step toward dependable support for your business.",
};
const faqs = {
  title: "Frequently asked Questions",
  description:
    "Find quick answers to common questions about Carteroil’s products, services, and global operations. Learn how our lubricants and oilfield solutions can support your business with proven reliability and performance.",
  questions: [
    {
      question: "What does Carteroil offer?",
      answer:
        "Carteroil provides premium lubricants and trusted oilfield services. You get solutions that improve performance, extend equipment life, and keep operations safe.",
    },
    {
      question: "Does Carteroil support industrial and marine needs?",
      answer:
        "We serve multiple industries. Our lubricants and fluids are designed for factories, heavy machinery, and marine engines. It operates in harsh environments.",
    },
    {
      question: "What oilfield services does Carteroil provide?",
      answer:
        "Carteroil offers inspection, control panel manufacturing, tubing fabrication, and equipment rentals. Our services support both onshore and offshore projects.",
    },
    {
      question: "How does Carteroil ensure product quality?",
      answer:
        "Every product meets API and international standards. You get consistent quality, advanced technology, and dependable protection in every solution.",
    },
    {
      question: "Can Carteroil support global customers?",
      answer:
        "Yes, Carteroil has a strong international presence. We serve clients across the Americas and beyond with lubricants and oilfield services.",
    },
    {
      question: "How do I get started with Carteroil?",
      answer:
        "You can explore our products online and contact our team directly. Our experts will guide you to the right solution and provide a good quote.",
    },
  ],
};
export const innovationData = {
  title: "Advanced technology for evolving engines",
  description:
    "Engines today demand more from lubricants — better wear resistance, higher temperature tolerance, and improved efficiency. Carteroil’s technology ensures your machinery runs at its best.",
  image1: "/collaboration1.jpg",
  image2: "/collaboration3.jpg",
  items: [
    "Nano-additive Technology",
    "High-temperature Stability",
    "Friction Reduction",
    "Improved Fuel Economy",
  ],
  yearsOfExperience: "125",
};

const page = () => {
  return (
    <div>
      <Hero2 data={heroData[0]} />
      <BuildingQuality data={innovationData} />
      <OurPartner />
      <Carousal />
      <Performance data={performance} />
      <Faqs data={faqs} />
    </div>
  );
};

export default page;
