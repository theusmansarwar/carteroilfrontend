import ProductsAndServices from "@/components/Home/ProductsAndServices";
import HistoricLegacy from "@/components/Home/HistoricLegacy";
import HistoryCards from "@/components/Home/HistoryCards";
import ReliableSolutions from "@/components/Home/ReliableSolutions";
import Collaborations from "@/components/Home/Collaborations";
import Testimonials from "@/components/Testimonials/Testimonials";
import CoreValues from "@/components/Home/CoreValues";
import OurValues from "@/components/Home/OurValues";
import Faqs from "@/components/Faqs/Faqs";
import Hero from "@/components/Home/Hero";
import Button2 from "@/components/Buttons/Button2";

export const metadata = {
  title: "Carter Oil",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam unde impedit saepe mollitia porro odio!",
};

const faqs = {
  title: "Frequently Asked Questions",
  description:
    "You may have questions about how Digital Aura helps your brand grow online. Our FAQ section gives you clear answers so you know exactly what to expect. Each answer is simple, easy to follow, and focused on helping you understand our services better.",
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
export default function Home() {
  return (
    <div>
      <Hero />
      <Button2 label={"Products & Services"} />
      <ProductsAndServices />
      <HistoricLegacy />
      <HistoryCards />
      <ReliableSolutions />
      <div style={{position:"relative",top:"30px"}}>
        <Button2 label={"Gallery"} />
      </div>
      <Collaborations />
      <Button2 label={"Testimonials"} />
      <Testimonials />
      <CoreValues />
      <OurValues />
      <Faqs data={faqs} />
    </div>
  );
}
