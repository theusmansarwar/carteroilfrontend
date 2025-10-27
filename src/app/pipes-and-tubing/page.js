import Faqs from "@/components/Faqs/Faqs";
import Hero2 from "@/components/Hero2/Hero2";
import OurPartner from "@/components/Piping&Tubing/OurPartner";
import BuildingQuality from "@/components/ServicePageTemplate/BuildingQuality";
import Carousal from "@/components/ServicePageTemplate/Carousal";
import Performance from "@/components/ServicePageTemplate/Performance";

export const metadata = {
  title: "Piping & Tubing | Expert Industrial Solutions Partnered with N&J",
  description:
    "Carter Oil offers trusted Piping & Tubing services through leading partners like N&J, ensuring quality, precision, and reliability in every project.",
};
const heroData = [
  {
    title: "Piping & Tubing",
    description:
      "Premium lubricants crafted to protect piping and tubing systems from friction, pressure, and corrosion while keeping performance stable in every environment.",
    backgroundImage: "/pipes-tubing-hero.webp",
  },
];
const innovationData = {
  title: "Ensuring Flow and Strength in Every System",
  description:
    "CarterOil provides durable solutions for industrial pipelines and tubing networks. Each lubricant forms a strong protective film that prevents rust, leakage, and material fatigue. The formulas maintain smooth movement, reduce maintenance downtime, and ensure system reliability under continuous flow. Every product is tested to meet high safety and performance standards trusted by major industries worldwide.",
  image1: "/pipe-quality1.webp",
  image2: "/pipe-quality2.webp",
  items: [
    "Anti-Friction & Anti-Leak Protection",
    "Corrosion Control for Harsh Environments",
    "Stable Performance Under High Pressure",
    "Extended Equipment Life",
  ],
  yearsOfExperience: "125",
};
const partnerData = [
  {
    descriptions: [
      "Carteroil builds strength through collaboration. Our partnership with NJ Oilfield Services extends our reach in tubing, piping, and fabrication solutions. Together, we deliver precision-engineered systems that meet international oilfield standards and ensure reliable performance across operations.",
      "NJ Oilfield Services brings years of field experience and modern manufacturing expertise. Its advanced facilities produce high-quality tubing and piping assemblies for drilling, extraction, and production. Each component passes strict testing to guarantee durability and performance under extreme pressure.",
      "Carteroil offers complete support with design, fabrication, inspection, and installation. Each project takes advantage of the combined expertise, innovative equipment.",
      "Your trust fuels our ambition. We are committed to expanding our capabilities. It improves the safety of our operations and creates the infrastructure that services the global energy sector. Together, we enhance mission reliability and durability.",
    ],
    image: "/nj.svg",
    title: "OUR PARTNERS IN",
    subtitle: "PIPES & TUBING",
  },
];
const performance = {
  title: "Ready to Power Your Operations?",
  description:
    "<p>Carteroil tubing and piping solutions bring strength, precision, and long-term reliability to every operation. Each product supports smooth fluid transfer, stable pressure, and consistent performance in demanding environments. You minimize downtime and improve efficiency with components built for endurance and accuracy. Decades of oilfield experience allow Carteroil to deliver products that meet strict quality standards and perform under pressure.</p><p>Trust Carteroil to reinforce your pipeline performance and keep your operations moving forward with confidence.</p>",
};
const sliderData = [
  {
    id: 1,
    image:"/pipe1.webp"
  },
  {
    id: 2,
    image:"/pipe2.webp"
  },
  {
    id: 3,
   image:"/pipe3.webp"
  },
  {
    id: 4,
   image:"/pipe4.webp"
  },
  {
    id: 5,
   image:"/pipe5.webp"
  },
  {
    id: 6,
   image:"/pipe6.webp"
  },
];

const faqs = {
  title: "Frequently asked Questions",
  description:
    "Carteroil tubing and piping are designed for the toughest industrial and oilfield demands. Most performance, durability, corrosion resistance, and custom solution requests are fielded and pioneered. This assists engineers, project managers, and other industry professionals in procuring the right products.",
 image:"/pipes-faq.webp",
    questions: [
    {
      question: "How are leaks minimized in high-pressure tubing systems?",
      answer:
        "Carteroil tubing and piping integrate reinforced construction and high-precision seals that leak less. Installation and Maintenance done according to a planned approach streamlines operational stability under extreme scenarios.",
    },
    {
      question: "How to deal with extreme changes in temperature and pressure?",
      answer:
        "Carteroil tubing is designed to take high pressure and temperature changes. Streamlined reinforced construction, coupled with quality engineering, eliminates performance and failure gaps.",
    },
    {
      question: "How to minimize maintenance downtime in piping networks?",
      answer:
        "Timely maintenance, coupled with quality workmanship in durable construction and superior seals, limits wear. Regular expert assessments predict weak points to reduce maintenance downtime.",
    },
    {
      question: "Are Carteroil products reliable for heavy industrial use?",
      answer:
        "Carteroil products are designed for oil, gas, construction, and industrial operations and are built to handle tough conditions while maintaining safe flow and operational stability.",
    },
    {
      question: "Is piping applicable in marine or offshore construction?",
      answer:
        "Every piece of piping and tubing is tested for durability and structural integrity. They are designed to be resistant to rust, corrosion, and even extreme salty marine conditions. Therefore, long-term safety is assured.",
    },
    
  ],
};

const page = () => {
  return (
    <div>
      <Hero2 data={heroData[0]} />
      <BuildingQuality data={innovationData} />
      <OurPartner data={partnerData} />
      <Carousal data={sliderData}/>
      <Performance data={performance} />
      <Faqs data={faqs} />
    </div>
  );
};

export default page;
