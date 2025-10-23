"use client";

import React, { useState, useId } from "react";
import { FaChevronDown } from "react-icons/fa";
import "./GuideDropDown.css";
import { FaArrowRight } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const GuideItems = [
  {
    id: "1",
    title: "18 Wheeler Trucks Lubrication Guide",
    description:
      "CarterOil makes high-quality lubricants for 18-wheeler trucks. All lubricants give excellent protection for engines, transmissions, and axles. The oils mitigate friction, manage temperature, and protect against wear in high-mileage operations. Coolants and greases allow shifting parts to stay clean and operate smoothly. All of these lubricants help to enhance the service life of heavy trucks and preserve fuel cost on extended hauls, and provide reliable service on all roads. They provide incredible performance in all streets and structural loads.",
    imageSrc: "/18-wheeler-guide.webp",
  },
  {
    id: "2",
    title: "Agriculture Equipment Lubrication Guide",
    description:
      "Agricultural machines operate year-round and require robust protection to perform. Engine oils enhance clean combustion, diminish wear, and stabilize power under heavy load, which is critical for performance. Fluid levels in hydraulics and transmission provide smooth movement and dependable pressure in tractors and harvesters. All such oils and fluids diminish friction, which allows longer working hours in the field. Coolants enhance engine temperature control and inhibit rust formation in the cooling system, which aids tank water circulation. Gear and differential oils stabilize and control drive components and operation during extended use. All these lubricants in place provide extended life, minimized downtime, and more consistent performance in the field and during harvests.",
    imageSrc: "/agri-equipment-guide.webp",
  },
  {
    id: "3",
    title: "Buses Lubrication Guide",
    description:
      "We offer specialized lubricants aimed at keeping buses operational and safe. Each product defends the engine, transmission, and axles against heat and friction. The motor oils make long trips possible, and high-mileage fleets experience less wear and tear. Coolants, while fluids, eliminate the bus’s overheating and move protective parts and bearings, increasing performance. All service lubricants are designed to improve fuel economy and extend the bus’s useful life. Thus, bus operators can have reliability on each route for daily operations, while passengers experience comfort, safety, and smooth performance.",
    imageSrc: "/buses-guide.webp",
  },
  {
    id: "4",
    title: "Construction Equipment Lubrication Guide",
    description:
      "CarterOil’s advanced lubricants are intended for heavy construction machinery. They provide comprehensive protection for the hydraulic systems, engines, and transmissions that operate within the construction site’s challenging conditions. Hydraulic fluids provide smooth control to the arms and cylinders. Engine oils eliminate the heat and wear that develop during long shifts. The transmission and gear oils provide contact protection while transferring power and preventing metal-on-metal contact. The high-temperature greases for wheel bearings provide protective dust encasement and corrosion protection. All CarterOil lubrication solutions lower repair costs, increase operational reliability, and extend the equipment’s useful life.",
    imageSrc: "/const-equipment-guide.webp",
  },
  {
    id: "5",
    title: "H-Duty Tow Trucks Lubrication Guide",
    description:
      "We manufacture specialized high-performance lubricating oils for H-Duty tow trucks. These trucks have extreme load handling capabilities. The lubricating oils protect engines, transmissions, lubricating gears, and hydraulic systems from overheating and pressure during heavy shifts. The hydraulic oils provide support for stable lift operation during towing and help in steady hydraulic-controlled operation. The oils also assist engines in friction control during long shifts and power control at varying levels. The gear oils help in protecting differentials from wear and abrasive metal wear in high-torque systems. And pressure grease also functionally during the extreme shifts by protecting the wheel bearings, rods, and clutch components from dirt and corrosion. Engine coolants and their functional system work at varying ambient conditions to keep the engine temperature steady.",
    imageSrc: "/h-duty-guide.webp",
  },
  {
    id: "6",
    title: "Light Duty Diesel Trucks Lubrication Guide",
    description:
      "CarterOil also provide advanced lubricants for light-duty diesel trucks. Each product works to optimize performance from the engine to the steering and gears. The system motor oils help in friction reduction, load protection, and engine life prolongation. The lubricating oils and engine coolants control the system temperature and wear in all seasons, and also protect from extreme wear and tear. The system also has transmission fluid that promotes smooth shifting and gear oils that assist in differentials to provide and control power. The high-quality grease and other system components help in protecting the system from wear and corrosion and promote system performance. Each formula works to provide protection, promote fuel efficiency, and improve reliability for trucks that work hard.",
    imageSrc: "/l-duty-guide.webp",
  },
  {
    id: "7",
    title: "Passenger Cars Lubrication Guide",
    description:
      "Every day, CarterOil provides full lubrication solutions for passenger cars that require seamless and efficient operation. The protective motor oil defends an engine against heat, wear and tear, and harmful deposits for steady power production and prolonged life. In all climates, coolant protects against corrosion and preserves temperature. Fluid transmissions enable fast and efficient shifts and responsive driving. Power steering fluid provides effortless and consistent steering. Gears, oil, and wheel bearing grease facilitate and preserve smooth movement under heavy stress. Every aspect of performance, critical part protection, and modern car reliability is engineered and balanced.",
    imageSrc: "/cars-guide.webp",
  },
  {
    id: "8",
    title: "School Buses Lubrication Guide",
    description:
      "Failure of lubrication will compromise every school bus operation and endanger its strong and safe running. For every route, CarterOil’s advanced custom formulation protects an engine against wear and overheats through heat and fuel performance for every route. Advanced coolant counters overheating, and continuous synthetic transmission fluid fosters unbroken and steady shifts. Gear oil facilitates power distribution along the axles, while premium grease to rods, pins, and bearings to mitigate the friction. All products and services are properly aligned to achieve bus reliability, performance, and passenger safety through trusted lubrication.",
    imageSrc: "/school-buses-guide.webp",
  },
  {
    id: "9",
    title: "Waste Truck Lubrication Guide",
    description:
      "Tough routes demand strong protection, and CarterOil delivers it with advanced lubricants for waste trucks. The engine oils reduce friction, control deposits, and keep engines clean under heavy loads. Hydraulic oils power lifting systems smoothly and prevent wear during continuous operation. Coolants guard against overheating in all weather conditions. Transmission and gear oils ensure steady torque and long-lasting reliability. High-performance greases protect bearings, rods, and pins from extreme pressure. Every product in the range works to extend service life, improve efficiency, and keep waste trucks operating safely through demanding daily routines.",
    imageSrc: "/waste-truck-guide.webp",
  },
  {
    id: "10",
    title: "Wheel Loaders Lubrication Guide",
    description:
      "Wheel loaders operate under pressure, and CarterOil ensures every part runs smooth. The hydraulic system gets reliable flow and control from ISO 68 oils. DriveTrain fluids handle heavy loads and protect vital components from wear. The engine oils keep engines powerful, clean, and efficient in tough conditions. Greases shield bearings and joints from heat and friction, ensuring strong grip and movement. Coolants protect against overheating and maintain balanced performance all year. Gear and transmission oils deliver smooth shifts and steady torque. Each product in the range extends life, reduces downtime, and keeps loaders working at full strength.",
    imageSrc: "/wheel-loader-guide.webp",
  },
];

export default function GuideDropDown() {
  const router = useRouter();
  const [openIndex, setOpenIndex] = useState(0);
  const groupId = useId();

  const onToggle = (index) => {
    setOpenIndex((curr) => (curr === index ? -1 : index));
  };

  return (
    <section className="dropdown-wrapper">
      {GuideItems.map((item, index) => {
        const open = index === openIndex;
        const panelId = `${groupId}-panel-${index}`;
        const buttonId = `${groupId}-button-${index}`;

        return (
          <article key={item.id} className="dropdown-card">
            <header className="dropdown-header" onClick={() => onToggle(index)}>
              <h2 className="dropdown-title">{item.title}</h2>
              <FaChevronDown
                className={`dropdown-chevron ${open ? "open" : ""}`}
              />
            </header>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`dropdown-panel ${open ? "open" : ""}`}
            >
              <div className="dropdown-content">
                <h3 className="dropdown-subtitle">{item.title}</h3>
                <p className="dropdown-detail">{item.description}</p>

                <div className="dropdown-media">
                  <img
                    className="dropdown-image"
                    src={item.imageSrc || "/placeholder.svg"}
                    alt="Product illustration"
                    loading="lazy"
                  />
                </div>
                <button
                  onClick={() => {
                    router.push("/contact-us");
                  }}
                >
                  <span className="btn-text">Contact Us</span>
                  <span className="btn-icon">
                    <FaArrowRight />
                  </span>
                </button>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}
