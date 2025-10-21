
import Faqs from "@/components/Faqs/Faqs";
import Hero2 from "@/components/Hero2/Hero2";
import GuideDropDown from "@/components/LubeGuide/GuideDropDown";
import LubeGuidePdf from "@/components/LubeGuide/LubeGuidePdf";

export const metadata = {
  title: "Lube Guide | Carter Oil",
  description:
    "Find the right lubricant for your engine or equipment with Carteroil USA’s Lube Guide—expertly crafted for performance and protection.",
};
const heroData = [
  {
    title: "LUBRICANTS GUIDE",
    description:
      "Explore Carteroil USA’s Lube Guide to find the perfect lubricant for every engine and industry. Maximize performance, protection, and reliability with our expert solutions.",
    backgroundImage: "/lube-guide-hero.webp",
  },
];
const faqs = {
  title: "Frequently Asked Questions",
  description:
    "Choosing the right lubricant can make all the difference in performance, protection, and efficiency. Our FAQs are designed to help you understand how the Carteroil USA Lube Guide works, how to choose the best lubricant for your equipment, and what makes our products stand out. From energy-saving hydraulic fluids to heavy-duty gear oils, you’ll find answers to the most common questions about lubricant types, OEM compatibility, maintenance intervals, and environmental safety. Explore these FAQs to make smarter, more confident lubrication choices for every industry — automotive, industrial, marine, or oilfield.",
  questions: [
    {
      question: "What is the Carteroil USA Lube Guide?",
      answer:
        "The Carteroil USA Lube Guide helps users select the right lubricant for industrial, automotive, and marine equipment by matching product performance to OEM specifications.",
    },
    {
      question: "How does the Lube Guide recommend the right lubricant?",
      answer:
        "It analyzes your machine type, load, temperature, and environment to suggest the best lubricant—whether synthetic, semi-synthetic, or mineral-based.",
    },
    {
      question: "Which industries are covered in the Lube Guide?",
      answer:
        "It includes solutions for manufacturing, construction, marine, oilfield, and energy sectors, offering lubricants for compressors, turbines, hydraulics, and gears.",
    },
    {
      question: "What makes Carteroil lubricants different?",
      answer:
        "Carteroil USA lubricants like Trinity Air, Aladdin ER AW, and WindForce Series are formulated with premium synthetic bases and advanced additive packs for maximum wear protection and energy efficiency.",
    },
    {
      question: "How often should I change industrial lubricants?",
      answer:
        "Intervals vary by product—Trinity Air lubricants, for example, run 6,000–10,000 hours, while hydraulic fluids like Aladdin ER AW offer extended drain intervals. Always follow OEM guidelines.",
    },
    {
      question: "Can the Lube Guide help improve energy efficiency?",
      answer:
        "Yes. Fluids like Aladdin ER AW Energy-Reducing Hydraulic Fluid have shown up to 8.5% lower energy consumption, improving system performance and reducing costs.",
    },
    {
      question: "Are Carteroil lubricants compatible with OEM equipment?",
      answer:
        "Absolutely. They meet or exceed leading OEM and international standards such as DIN 51524, AGMA 9005-F16, ISO 12925-1, and U.S. Steel 224.",
    },
    {
      question: "Does the Lube Guide include eco-friendly products?",
      answer:
        "Yes. Many Carteroil formulations are zinc-free, chlorine-free, and low-emission, designed to be safe for operators and environmentally responsible.",
    },
    {
      question: "What are the benefits of using synthetic lubricants from Carteroil USA?",
      answer:
        "Synthetic options like Trinity IGO Gear Oil and WindForce Turbine Oil offer better oxidation stability, thermal protection, and performance in harsh environments.",
    },
    {
      question: "How can I get technical support for lubricant selection?",
      answer:
        "You can contact Carteroil USA’s technical team at sales@carteroilusa.com or visit www.carteroilusa.com for expert assistance and personalized recommendations.",
    },
  ],
};
const page = () => {
  return (
    <div>
      <Hero2 data={heroData[0]} />
      <LubeGuidePdf />
      <GuideDropDown />
      <Faqs data={faqs} />
    </div>
  );
};

export default page;
