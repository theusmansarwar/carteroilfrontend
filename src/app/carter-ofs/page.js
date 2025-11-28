import Faqs from "@/components/Faqs/Faqs";
import Hero2 from "@/components/Hero2/Hero2";
import Benefits from "@/components/ServicePageTemplate/Benefits";
import BuildingQuality from "@/components/ServicePageTemplate/BuildingQuality";
import Performance from "@/components/ServicePageTemplate/Performance";
import ProductsSection from "@/components/ServicePageTemplate/ProductsSection";

export const metadata = {
  title: "Premium Oilfield Services | Carteroil OFS Solutions",
  description:
    "Carteroil provides certified oilfield services for drilling, fabrication, and maintenance. Ensure safe, reliable, and compliant operations with expert support.",
};
const heroData = [
  {
    title: "Oil Field Services",
    description: `
      <p>Premium oilfield solutions designed to support drilling, production, fabrication, and maintenance across critical energy environments. Get engineered services that stabilise field operations, enhance safety, and keep high-demand systems.</p>`,
    backgroundImage: "/ofs-innovation1.webp",
  },
];
const innovationData = {
  title: "Tailored Field Solutions for Demanding Energy Operations",
  description:
    "Carteroil Oil Field Services delivers precision support for drilling, fabrication, inspection, and field operations. Our teams manage critical tasks using certified procedures and tested equipment. You gain fast deployment, safe execution, and reliable results in every condition. The service strengthens uptime, reduces operational delays, and maintains compliance with standards. You can trust our technicians and engineers to support projects.",
  image1: "/ofs-innovation2.webp",
  image2: "/ofs-innovation1.webp",
  items: [
    "Certified Engineering Expertise",
    "Rapid Field Deployment",
    "Global Standard Compliance",
    "Reliable Operational Support",
  ],
  yearsOfExperience: "125",
};
const subproducts = {
  title: "Oil Field Services",
  description:
    "Carteroil supplies equipment designed for strength and accuracy. You will find hydraulic tube benders that deliver precision in every bend. ",
  items: [
    {
      title: "Instrumentation & Electrical",
      description:
        "Instrumentation & Electrical services support critical oilfield operations by ensuring accurate measurement, stable power supply, and dependable control over essential processes. Field instruments are calibrated to maintain precision in pressure, temperature, and flow readings. Electrical installations include wiring systems, control units, and power distribution networks designed for harsh industrial environments. The service strengthens operational visibility and safety across drilling and production sites. Automated systems are integrated to monitor performance, reduce errors, and maintain consistent output. Certified technicians follow established standards to prevent electrical faults and equipment failures. The combined approach improves system reliability, enhances efficiency, and supports long-term stability in both onshore and offshore environments.",
      image: "/instrumentation.svg",
    },
    {
      title: "Control Panel Manufacturing",
      description:
        "Control Panel Manufacturing delivers engineered panels built to manage automation, safety systems, and electrical operations in complex oilfield environments. Panels are assembled using high-quality components designed to handle vibration, heat, and electrical fluctuations. Each unit supports monitoring, fault protection, and streamlined communication between field equipment and control rooms. Functional testing verifies accuracy and durability under industrial load conditions. Custom designs accommodate drilling rigs, production systems, process plants, and fabrication facilities. The manufacturing process follows international standards to ensure long operational life and stable performance. Professionally built control panels improve system coordination, reduce downtime, and support efficient field management across all project phases.",
      image: "/controlpanel.svg",
    },
    {
      title: "Inspection Services",
      description:
        "Inspection Services evaluate equipment, structural components, and field assets to confirm compliance with safety and performance standards. Certified inspectors use approved testing methods to detect corrosion, fatigue, misalignment, and mechanical wear. Assessments cover piping networks, pressure vessels, lifting equipment, electrical systems, and fabricated structures. Detailed reports outline findings, severity levels, and corrective measures that meet industry regulations. Routine inspections reduce operational risk, prevent unexpected failures, and ensure readiness during drilling or production activities. Adherence to standards such as API, NACE, and ISO strengthens reliability across all project phases. Comprehensive inspection support maintains safety culture, equipment integrity, and stable workflow in demanding oilfield environments.",
      image: "/inspection.svg",
    },
    {
      title: "Manufacturing Support",
      description:
        "Manufacturing Support assists industrial and oilfield facilities with fabrication, assembly, machining, and component preparation tasks. Processes follow strict engineering guidelines to ensure every part meets design and performance requirements. Support teams handle structural preparation, quality verification, equipment assembly, and material handling. The service reduces production errors, accelerates project timelines, and maintains consistency across manufactured components. Manufacturing assistance strengthens the reliability of equipment used in drilling, processing, and mechanical operations. Quality-driven workflows help prevent failures during installation or field use. Comprehensive support ensures that each component performs effectively under demanding conditions across global energy environments.",
      image: "/manufacturing.svg",
    },
    {
      title: "Equipment Rentals",
      description:
        "Equipment Rentals provides essential machinery and tools required for drilling, maintenance, and field operations across the energy industry. The fleet includes generators, pumps, compressors, handling equipment, and specialised oilfield machinery built for demanding environments. Each unit undergoes inspection and servicing to ensure dependable performance in remote and high-pressure locations. Rental availability reduces capital investment and supports rapid deployment during planned or emergency activities. The service enables flexible project execution while maintaining compliance with industry safety requirements. Equipment is selected to match operational needs such as lifting, power generation, pipeline work, and fabrication support. Reliable rentals help maintain workflow continuity and support efficient operations across land and offshore fields.",
      image: "/equipmentrentals.svg",
    },
    {
      title: "Technical Staffing",
      description:
        "Technical Staffing provides skilled professionals for oilfield operations, fabrication work, inspection activities, electrical systems, and engineering support. Personnel include technicians, welders, instrument specialists, supervisors, and project engineers experienced in demanding energy environments. Each candidate is screened for field competency, safety knowledge, and industry certifications. Staffing services help maintain consistent workforce availability during peak workloads, shutdowns, or long-term projects. Teams are assigned according to project requirements, ensuring precise execution of technical tasks. The approach improves productivity, reduces hiring delays, and maintains operational continuity. Reliable staffing support ensures that specialised knowledge is available whenever critical tasks arise across land, offshore, and industrial facilities.",
      image: "/technicalstaffing.svg",
    },
    {
      title: "Tubing & Piping Fabrication",
      description:
        "Tubing & Piping Fabrication delivers precision-built assemblies designed to handle high pressure, corrosive fluids, and continuous field activity. Fabrication processes include cutting, welding, bending, threading, and coating to meet exact engineering specifications. Materials are selected for strength, durability, and compatibility with oilfield applications. Quality checks verify alignment, weld integrity, and pressure tolerance before deployment. Fabricated piping supports drilling rigs, processing units, flowlines, and facility upgrades. The service reduces installation delays and ensures seamless integration into existing systems. Well-constructed tubing and piping solutions enhance operational safety, flow efficiency, and long-term performance across both onshore and offshore environments.",
      image: "/tubing.svg",
    },
    {
      title: "Marine Riser Cleaning",
      description:
        "Marine Riser Cleaning ensures that offshore risers remain free from marine growth, sediments, and operational obstructions that affect flow efficiency. Specialised cleaning equipment and underwater tools are used to remove buildup without damaging structural surfaces. The service helps maintain stable pressure control and safe drilling operations in marine environments. Regular cleaning reduces corrosion, improves riser integrity, and extends operational lifespan. Each procedure follows offshore safety protocols and environmental standards. Maintaining clean risers supports consistent performance during exploration, production, and well intervention activities. Professional maintenance ensures reliable operation even in deep-water and high-current conditions.",
      image: "/marineriser.svg",
    },
  ],
};
const benefitsData = {
  description: `<p>Oilfield environments demand accuracy, safety, and dependable support. Carteroil’s OFS solutions handle high-pressure conditions where precision matters. Our certified teams manage electrical work, fabrication, inspection, panel manufacturing, and field maintenance. Each service follows strict safety regulations and advanced engineering practices. The processes reduce downtime, extend equipment life, and stabilise operations during drilling, production, and heavy-duty activities. Global approvals confirm quality and performance across all project scales.</p>
<p>We offer solutions that support rigs, plants, and industrial sites across the world. Your operations stay compliant, equipment stays protected, and every stage of the workflow runs without interruption.</p>`,
  image1: "/ofs-benefit1.webp",
  image2: "/ofs-benefit2.webp",
  items: [
    {
      title: "Precision Execution",
      description:
        "Skilled field teams support electrical, mechanical, and fabrication tasks. You receive accurate work that keeps your systems stable.",
    },
    {
      title: "Safety Assurance",
      description:
        "Strict safety protocols reduce workplace risks. Certified inspections protect your crew and equipment from failures.",
    },
    {
      title: "Reliable Deployment",
      description:
        "Fast delivery of technicians, tools, and equipment minimises delays. Your operations continue without interruptions.",
    },
    {
      title: "Fabrication Support",
      description:
        "Custom-built assemblies and piping enhance project performance. You get components designed for tough field environments.",
    },
    {
      title: "Offshore Capability",
      description:
        "Trained offshore crews handle installation and maintenance. You can depend on them in high-pressure marine conditions.",
    },
    
  ],
};

const performance = {
  title: "Ready to Strengthen Your Oilfield Operations?",
  description: `<p>Carteroil Oil Field Services delivers precision support for drilling, fabrication, offshore work, and field maintenance. You gain reliable teams, advanced engineering, and global-standard processes. Your operations stay efficient, safe, and fully compliant.
</p>
<p> Trust Carteroil to power your next project with proven industry expertise.
</p>
`,
};
const faqs = {
  title: "FAQs About Oil Field Services",
  description:
    "You get simple answers to key questions about Carteroil oil field services. You understand how the team supports work in drilling, production, and fabrication.",
  image: "/ofs-faq.webp",
  questions: [
    {
      question: "How do oil field services help operations?",
      answer:
        "Oil field services improve daily tasks. Teams cut delays and raise output in your projects. The support covers drilling, production, and main field work. You gain smooth and safe progress in all stages."
    },
    {
      question: "How do control panels support automation?",
      answer:
        "Custom panels integrate multiple systems in one location. You receive clear data in real-time. Quick action becomes easy and safe in tough field conditions. Panels guide workers toward better control of equipment."
    },
    {
      question: "How can inspections stop costly downtime?",
      answer:
        "Inspections reveal hidden faults in parts and structures. Teams find weak points before issues grow. You save time, money, and the environment. Field units stay safe and ready for work."
    },
    {
      question: "How does manufacturing support project results?",
      answer:
        "Strong fabrication yields parts that withstand heat and pressure. Tests confirm the strength of every unit. Your team faces fewer errors at the site. You get safe and steady field performance."
    },
    {
      question: "How do global safety rules support service quality?",
      answer:
        "Global standards, such as API, ISO, and NACE, establish clear safety levels. The rules guide teams toward safe work and steady results. You avoid heavy risks in large field projects. Work stays safe and meets all needs."
    },
    {
      question: "Can Carteroil services support offshore and remote sites?",
      answer:
        "Yes, teams handle deepwater rigs and remote zones with care. Modular units help workers move fast and set up tools with ease. You get full support in harsh and far-off areas."
    }
  ]
};


const page = () => {
  return (
    <div>
      <Hero2 data={heroData[0]} />
      <BuildingQuality data={innovationData} />
      <ProductsSection title={subproducts.title} data={subproducts} />
      <Benefits data={benefitsData} />
      <Performance data={performance} />
      <Faqs data={faqs} />
    </div>
  );
};

export default page;
