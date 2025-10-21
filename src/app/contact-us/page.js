import ContactForm from "@/components/ContactUs/ContactForm";
import Hero2 from "@/components/Hero2/Hero2";

export const metadata = {
  title: "Contact Us | Carter Oil",
  description:
    "Contact Carteroil’s team for reliable lubrication solutions and oilfield services designed to improve performance and protect your equipment.",
};
const heroData = [
  {
    title: "Contact Us",
    description:
      "Carteroil has powered global industries since 1893. John Joyce Carter founded a company that shaped the energy market and developed reliable lubrication solutions. Contact us today and take the next step toward dependable support for your business.",
    backgroundImage: "/contact-us.webp",
  },
];
const page = () => {
  return (
    <div>
      <Hero2 data={heroData[0]} />
      <ContactForm />
    </div>
  );
};

export default page;
