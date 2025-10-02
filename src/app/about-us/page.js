import OurLegacy from "@/components/AboutUs/OurLegacy";
import AnImpact from "@/components/AboutUs/AnImpact";
import CoreStrengths from "@/components/AboutUs/CoreStrengths";
import Partnering from "@/components/AboutUs/Partnering";
import Hero2 from "@/components/Hero2/Hero2";

export const metadata = {
  title: "About Us | Carter Oil",
  description:
    "Carteroil USA offers 125+ years of lubrication expertise. Trusted solutions for automotive, industrial, and marine sectors with quality and reliability.",
};
const heroData = [
  {
    title: "About Us",
    description:
      "Carteroil has powered industries worldwide since 1893. John Joyce Carter founded the company and shaped early energy markets. The vision led to strong advances in lubrication solutions. Carteroil grew into a leader in the sector. Today, the company delivers reliable and innovative products that support industries across the world.",
    backgroundImage: "/service-hero.jpg",
  },
];
const page = () => {
  return (
    <div>
      <Hero2 data={heroData[0]} />
      <OurLegacy />
      <AnImpact />
      <CoreStrengths />
      <Partnering />
    </div>
  );
};

export default page;
