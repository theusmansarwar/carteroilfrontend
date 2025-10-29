import Faqs from "@/components/Faqs/Faqs";
import Hero2 from "@/components/Hero2/Hero2";
import OurPartner from "@/components/Piping&Tubing/OurPartner";
import BuildingQuality from "@/components/ServicePageTemplate/BuildingQuality";
import Carousal from "@/components/ServicePageTemplate/Carousal";
import Performance from "@/components/ServicePageTemplate/Performance";

export const metadata = {
  title: "Oil & Gas Services | Reliable and Innovative Energy Solutions",
  description:
    "Carter Oil lubricants safeguard oil and gas equipment against wear, friction, and corrosion, ensuring reliable performance in the most demanding conditions.",
};
const heroData = [
  {
    title: "Oil & Gas Services",
    description:
      "Carteroil provides high-quality lubricants designed to maintain optimal performance of your oil and gas machinery. Our lubricants control your drilling rigs, pumps, compressors, and extraction machinery from the damaging effects of friction, wear, and corrosion. They withstand high pressure and extreme temperature ranges. Carteroil lubricants enable you to carry out your oilfield operations with confidence.",
    backgroundImage: "/oil-and-gas-hero.webp",
  },
];
const innovationData = {
  title: "Optimizing Performance in Every Oilfield Operation",
  description:
    "Carteroil lubricants form a strong protective layer on critical machines. They reduce heat, prevent mechanical wear, and protect against chemical damage. Every product complies with strict oilfield safety regulations. The equipment keeps running without frequent repairs. Operations stay smooth, and downtime stays low.",
  image1: "/gas-quality1.webp",
  image2: "/gas-quality2.webp",
  items: [
    "Anti-Friction Protection for Drilling and Pumping Equipment",
    "Corrosion Resistance for Harsh Oilfield Conditions",
    "Stable Performance under High Pressure and Temperature",
    "Extended Equipment and Component Life",
  ],
  yearsOfExperience: "125",
};
const partnerData = [
  {
    descriptions: [
      "Carteroil believes strength grows through the right partnerships. Our collaboration with AORS brings expertise, innovation, and commitment to every stage of oilfield and gas operations. Together, we deliver dependable solutions that meet the high demands of modern energy production",
      "AORS adds value through strong technical knowledge and deep field experience. Its support extends across drilling, extraction, and maintenance projects. Each operation benefits from advanced tools and proven methods that keep performance consistent under pressure.",
      "Carteroil works closely with AORS to improve reliability and reduce risks in complex environments. The partnership reflects shared goals of safe operations, durable results, and lasting client trust.",
    ],
    title: "Oil & Gas",
    subtitle: "Services",
    image:'/aors.png'
  },
];
const performance = {
  title: "Keep Oilfield Operations Running Smoothly",
  description:
    "<p>Carteroil products give you reliable solutions for every oil and gas task. They help rigs, pumps, and processing machines run efficiently under tough conditions. Decades of oilfield experience allow Carteroil to make products that meet industry rules. Equipment stays safe, strong, and effective. You protect investments and keep operations moving.</p><p>Now, Trust Carteroil to protect investments and keep operations productive.</p>",
};
const sliderData = [
  {
    id: 1,
    image: "/oil1.webp"
  },
  {
    id: 2,
    image: "/oil2.webp"
  },
  {
    id: 3,
    image: "/oil3.webp"
  },
  {
    id: 4,
    image: "/oil4.webp"
  },
  {
    id: 5,
    image: "/oil5.webp"
  },

];
const faqs = {
  title: "Frequently asked Questions",
  description:
    "Carteroil lubricants handle the hardest conditions in oil and gas operations. This section answers questions about protection, durability, high-pressure use, and custom solutions. It guides the engineers, operators, and field managers.",
  image: "/oil-and-gas-faq.webp",
  questions: [
    {
      question: "Which lubricants work best for high-pressure oilfield tasks?",
      answer:
        "The products handle the extreme heat and chemical exposure. They make sure safe wear and keep equipment running smoothly.",
    },
    {
      question: "Can lubricants handle offshore oil and gas operations?",
      answer:
        "All products resist corrosion, saltwater, and harsh environments. Offshore rigs and marine extraction machines are safe and strong.",
    },
    {
      question: "How do custom lubricants improve oilfield efficiency?",
      answer:
        "Tailored formulas match specific equipment needs. They reduce stress, improve flow, and cut maintenance work. Custom products keep operations smooth.",
    },
    {
      question:
        "How to maintain stable equipment performance under extreme heat?",
      answer:
        "Carteroil lubricants keep their protective layer at high temperatures. The machines run safely without overheating.",
    },
    {
      question:
        "Are these lubricants suitable for heavy-duty oilfield machinery?",
      answer:
        "Yes. Products handle rigs, pumps, compressors, and extraction units. The equipment performs reliably even under constant heavy load.",
    },
    {
      question:
        "How to select the right lubricant for complex oil and gas operations?",
      answer:
        "Engineers check operating pressure, temperature, chemical exposure, and machine type. They recommend products that give safe, strong, and efficient performance.",
    },
  ],
};

const page = () => {
  return (
    <div>
      <Hero2 data={heroData[0]} />
      <BuildingQuality data={innovationData} />
      <OurPartner data={partnerData} />
      <Carousal data={sliderData} />
      <Performance data={performance} />
      <Faqs data={faqs} />
    </div>
  );
};

export default page;
