import Hero2 from "@/components/Hero2/Hero2";
import History from "@/components/History/History";

export const metadata = {
  title: "History | Carter Oil",
  description:
    "Discover the journey of Carteroil, a trusted name in lubrication services, with a rich history dating back to 1893 and a commitment to innovation.",
};
const heroData = [
  {
    title: "History",
    description:
      "Carter Oil has powered global industries since 1893, when John Joyce Carter founded a pioneering company. It shaped the energy markets and advanced reliable lubrication solutions.",
    backgroundImage: "/history-hero.webp",
  },
];
const page = () => {
  return (
    <div>
      <Hero2 data={heroData[0]} />
      <History />
    </div>
  );
};

export default page;
