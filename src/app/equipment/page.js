import Faqs from "@/components/Faqs/Faqs";
import Hero2 from "@/components/Hero2/Hero2";
import OurPartner from "@/components/Piping&Tubing/OurPartner";
import Benefits from "@/components/ServicePageTemplate/Benefits";
import BuildingQuality from "@/components/ServicePageTemplate/BuildingQuality";
import Carousal from "@/components/ServicePageTemplate/Carousal";
import Performance from "@/components/ServicePageTemplate/Performance";
import ProductsSection from "@/components/ServicePageTemplate/ProductsSection";

export const metadata = {
  title: "Equipment | Reliable Tools and Solutions Powered by Carter Oil",
  description:
    "Equipment solutions from Carteroil deliver safety, extend lifespan, reduce maintenance, and maintain smooth machine operation."
};
const heroData = [
  {
    title: "Equipment",
    description: `
      <p>CaterOil delivers advanced equipment built for performance, durability, and precision. Every machine supports <a href="https://carteroilusa.com/oil-and-gas-services">construction, testing, and maintenance</a>, with reliable power and lasting efficiency.</p>`,
    backgroundImage: "/pipes-tubing-hero.webp",
  },
];
const innovationData = {
  title: "Delivering Reliable Tools for Every Job",
  description:
    "Carteroil provides a broad selection of equipment tested in real field conditions. You get machines that handle hydraulic bending, pipe work, welding, and pressure testing without failure. Our goal is to give you reliable access to the right tools at the right time. Every item meets strict safety and performance standards. You stay confident knowing your operations are supported by proven equipment.",
  image1: "/equipment-ino1.webp",
  image2: "/equipment-ino2.webp",
  items: [
    "Wide Range of Equipment Options",
    "Purchase and Rental Flexibility",
    "Field-Tested Performance",
    "Global Distribution Network",
  ],
  yearsOfExperience: "125",
};
const subproducts = {
  title: "Equipment",
  description: "Carteroil supplies equipment designed for strength and accuracy. You will find hydraulic tube benders that deliver precision in every bend. ",
  items: [
    {
      title: "Oil Handling Pumps",
      description: "Oil Handling Pumps ensure smooth transfer of lubricants and fluids in industrial operations. The pumps are designed for precision, safety, and long service life. Each model handles different viscosities efficiently and prevents contamination during transfer. You get reliable flow control for oils, fuels, and hydraulic fluids in demanding environments. The strong build allows use in refineries, workshops, and service centers. It reduces product loss, protects quality, and ensures consistent performance. Carteroil pumps operate quietly and resist wear, even under heavy use. Their durable seals and efficient design make them ideal for continuous operation in both fixed and portable systems.",
      "image": "/oil-handling.webp"
    },
    {
      title: "Grease Pumps",
      description: "Carteroil Grease Pumps deliver consistent lubrication for heavy equipment. They ensure smooth performance in bearings, joints, and gears. The pumps handle different grease grades easily and maintain steady pressure. You can use them in manufacturing, construction, and transport applications. The strong construction reduces downtime and extends component life. Each pump is tested for accuracy and durability. You get clean operation, low maintenance, and high output efficiency. Carteroil Grease Pumps are ideal for both manual and centralized lubrication systems, providing steady flow and reliable performance even in high-load operations.",
      "image": "/grease-pump.webp"
    },
    {
      title: "Centralized Lubrication Systems",
      description: "Centralized Lubrication Systems provide automatic lubrication to multiple machine points. You save time and reduce maintenance errors. The system delivers the right amount of lubricant to each part at the right interval. It improves productivity and extends the life of bearings, chains, and gearboxes. The setup suits factories, refineries, and power plants where reliability is critical. Carteroil designs these systems with high-quality pumps, controllers, and metering devices for precise distribution. You gain better efficiency, fewer breakdowns, and lower operating costs across the plant.",
      "image": "/cent-lubrication.webp"
    },
    {
      title: "Oil Filtration Units",
      description: " Oil Filtration Units keep hydraulic and lubrication oils clean and efficient. They remove water, dirt, and metal particles that can harm equipment. You can use them in refineries, turbines, and mobile systems. The unit’s high-capacity filters ensure long service intervals and clean oil circulation. It helps reduce downtime and extend oil life. The system works under high flow and pressure conditions without affecting viscosity. Carteroil Oil Filtration Units maintain the purity of your lubricants, improve efficiency, and protect against wear and oxidation. You get consistent system performance and lower maintenance costs.",
      "image": "/oil-filtration.webp"
    },
    {
      title: "Grease Guns",
      description: "Carteroil Grease Guns are practical tools for precise lubrication in maintenance tasks. They allow you to apply grease directly where it is needed, ensuring smooth operation of bearings and joints. Each gun is easy to handle and is built from corrosion-resistant materials. The design prevents leaks and provides uniform pressure for accurate delivery. Carteroil Grease Guns suit workshops, vehicle service centers, and field maintenance teams. They ensure quick, clean, and efficient lubrication with minimal waste. You get long tool life and consistent results every time.",
      "image": "/grease-guns.webp"
    },
    {
      title: "Drum Handling Equipment",
      description: "Carteroil Drum Handling Equipment provides a safe and efficient method for moving oil and lubricant drums. It includes trolleys, lifters, and dispensers built for heavy industrial use. The design ensures stability during transfer and reduces the risk of spills or injury. You can handle full drums with minimal effort, even in tight spaces. Carteroil equipment is made from high-grade steel and resists corrosion from oils and chemicals. It enhances workplace safety, reduces labor costs, and boosts productivity in oil storage and handling operations.",
      "image": "/drum-handling.webp"
    },
    {
      title: "Portable Oil Transfer Units",
      description: "Carteroil Portable Oil Transfer Units give you mobility and convenience in oil distribution. They allow easy transfer of lubricants between storage tanks and machinery. Each unit comes equipped with pumps, hoses, and filtration systems for clean delivery. The compact design makes it ideal for workshops and field use. You can rely on it for fast, contamination-free transfer of oils and hydraulic fluids. The system supports multiple viscosities and ensures consistent flow under pressure. Carteroil Portable Units help maintain efficiency and prevent waste during every transfer.",
      "image": "/portable-oil.webp"
    },
    {
      title: "Automatic Lubrication Systems",
      description: "Automatic Lubrication Systems provide continuous, measured lubrication to critical machine parts. They reduce manual work and keep operations running smoothly. The system maintains a constant film of oil or grease to prevent friction and wear. It suits heavy-duty machines in construction, mining, and manufacturing. You can program the system for specific intervals, ensuring accuracy and reliability. The result is longer equipment life, fewer breakdowns, and lower maintenance costs. Carteroil Automatic Systems combine precision technology with durable materials to deliver consistent performance in every condition.",
      "image": "/auto-lubrication.webp"
    }
  ],
}
const benefitsData = {
  description:
    `<p>Strong equipment is essential for reliable performance in the field. Carteroil provides machines and tools designed to meet the demands of <a href="https://carteroilusa.com/oil-and-gas-services">oilfield and industrial operations</a>. Each unit is tested for accuracy, durability, and safety. The range covers hydraulic tube benders, hydro test units, welding machines, and cone and thread tools. Every piece of equipment is built to handle continuous use and heavy workloads. Construction quality ensures dependable results under stress</p>
<p>Carteroil offers both <a href="https://carteroilusa.com/contact-us">purchase and rental options</a>, giving businesses access to the right tools for every project. That allows teams to control costs while completing jobs on time.</p>
<p>Safety and performance standards guide every product in our range. As a result, Carteroil equipment reduces downtime, increases efficiency, and secures reliable outcomes. From <a href="https://https://carteroilusa.com/pipes-and-tubing/<a href="https://carteroilusa.com/pipes-and-tubing">fabrication to testing</a>,</a>, our solutions give businesses the confidence to deliver without delays.</p>`,
  image1: "/equipment-benefit1.webp",
  image2: "/equipment-benefit2.webp",
  items: [
    {
      title: "Durable Construction",
      description: "Equipment performs under continuous use and extreme stress."
    },
    {
      title: "Accurate Results",
      description: "Tools deliver consistent precision for every operation."
    },
    {
      title: "Flexible Access",
      description: "Buy or rent based on your project needs."
    },
    {
      title: "Safety First",
      description: "Every item is tested under strict global safety standards.\n"
    },
    {
      title: "Higher Productivity",
      description: "Reliable machines reduce downtime and speed up project delivery."
    },
    {
      title: "Global Reach",
      description: "Carteroil supplies equipment to clients worldwide without delay."
    },
    {
      title: "Comprehensive Solutions",
      description: "You cover bending, welding, testing, and pipe work using one trusted source.\n"
    }
  ],
};
const partnerData = [
  {
    description: `
  <p>Carteroil works with AORS to provide reliable and advanced equipment for industrial use. The partnership combines strong engineering, modern design, and quality manufacturing to deliver tools that perform under pressure.
</p>
  
  <p>AORS adds proven expertise and advanced facilities to every project. Its production methods focus on durability and precision, helping us supply equipment that meets global safety and performance standards.</p>
  
  <p>The <a href="https://carteroilusa.com/pipes-and-tubing">collaboration builds</a> value for every client. Together, we deliver machines that last longer, reduce downtime, and keep your operations running smoothly. You gain tools that support every task with power, accuracy, and trust.
</p>
`,
    image: '/aors.png',
    title: "AORS",
    subtitle: "Partner in Equipment Solutions",
  },
];
const performance = {
  title: "Ready to Power Your Next Project?",
  description:
    `<p>Carteroil equipment ensures your team has the right tools for every task. You deliver results on time. You reduce risk of failure. You meet project demands with confidence.</p>
<p>We help you cut downtime, control costs, and maintain high safety standards. You get machines that continue working under the harshest industrial conditions.</p>
<p>Trust Carteroil to provide equipment that supports your success. Our tools are always ready to move your business forward.</p>`,
};
const faqs = {
  title: "FAQs About Equipment",
  description:
    "Discover how Carteroil equipment is built to handle demanding oilfield conditions. From testing to welding and hydraulic power, our machines deliver precision, safety, and performance in every project.",
  image: "/equipment-faq.webp",
  questions: [
    {
      question: "What equipment does Carteroil provide?",
      answer:
        "Carteroil supplies hydraulic tube benders, hydro test units, welding machines, hydraulic power units, and cone and thread tools. Each product is designed for heavy use in oilfield and industrial projects. The equipment is durable and precise. It supports a wide range of field operations.",
    },
    {
      question: "Can I buy Carteroil equipment instead of renting?",
      answer:
        "Yes, Carteroil offers both purchase and rental choices. Buying is suitable for long-term projects. Renting gives flexibility for short-term needs. The website allows you to request either option.",
    },
    {
      question: "Is Carteroil equipment tested for safety?",
      answer:
        "Yes, all Carteroil equipment is tested to global safety and performance standards. Each machine is checked before delivery. This ensures safe use in field conditions. Safety is always a top priority.",
    },
    {
      question: "Does Carteroil equipment reduce downtime?",
      answer:
        "Yes, Carteroil equipment is built for reliability. Strong design prevents sudden failure. This helps reduce downtime and delays in projects. You gain higher efficiency on site.",
    },
    {
      question: "Where can I see Carteroil equipment details online?",
      answer:
        "The full equipment catalog is available on Carteroil’s website. Each page shows specifications and uses. You can compare items before choosing. The website makes selection clear and simple.",
    },
    {
      question: "Does Carteroil provide support after delivering equipment?",
      answer:
        "Yes, Carteroil offers service and technical support for all equipment. Our team helps you set up and operate machines safely. Support is available during the project. This ensures smooth and reliable performance.",
    },
    {
      question: "Can Carteroil equipment handle heavy workloads in oilfields?",
      answer:
        "Yes, Carteroil equipment is designed for continuous use under pressure. It withstands harsh environments and tough projects. The machines perform reliably in oilfield conditions. They are trusted by operators worldwide.",
    },

  ],
};

const page = () => {
  return (
    <div>
      <Hero2 data={heroData[0]} />
      <BuildingQuality data={innovationData} />
      <ProductsSection title={subproducts.title} data={subproducts} />
      <Benefits data={benefitsData} />
      <OurPartner data={partnerData} />
      <Performance data={performance} />
      <Faqs data={faqs} />
    </div>
  );
};

export default page;

