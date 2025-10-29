import Catalogues from "@/components/Catalogues/Catalogues";
import Hero2 from "@/components/Hero2/Hero2";

export const metadata = {
  title: "Catalogues",
  description:
    "Contact Carteroil’s team for reliable lubrication solutions and oilfield services designed to improve performance and protect your equipment.",
};
const heroData = [
  {
    title: "Catalogues",
    description:
      "Carteroil has powered global industries since 1893. John Joyce Carter founded a company that shaped the energy market and developed reliable lubrication solutions. Contact us today and take the next step toward dependable support for your business.",
    backgroundImage: "/catalogues-hero.webp",
  },
];
const page = () => {
  return (
    <div>
      <Hero2 data={heroData[0]} />
      <Catalogues/>
    </div>
  );
};

export default page;
