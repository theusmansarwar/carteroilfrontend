import Hero2 from "@/components/Hero2/Hero2";
import History from "@/components/History/History";

export const metadata = {
  title: "History | Carter Oil",
  description:
    "Explore the legacy of Carter Oil — a trusted leader in lubrication services since 1893, built on innovation, reliability, and excellence."
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
