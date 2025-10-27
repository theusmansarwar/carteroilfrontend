import OurLegacy from "@/components/AboutUs/OurLegacy";
import AnImpact from "@/components/AboutUs/AnImpact";
import CoreStrengths from "@/components/AboutUs/CoreStrengths";
import Partnering from "@/components/AboutUs/Partnering";
import Hero2 from "@/components/Hero2/Hero2";

export const metadata = {
  title: "About Us | Carter Oil",
  description:
    "Carter Oil brings over 125 years of lubrication expertise, delivering trusted solutions for automotive, industrial, and marine sectors with unmatched quality and reliability."
};
const heroData = [
  {
    title: "About Us",
    description:
      "Carteroil has powered global industries since 1893. John Joyce Carter started a company that shaped energy markets and built trusted lubrication solutions. Contact Carteroil today and move forward with solutions designed for your success.",
    backgroundImage: "/about-us.webp",
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
