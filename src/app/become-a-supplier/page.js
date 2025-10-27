import ContactForm from "@/components/ContactUs/ContactForm";
import Hero2 from "@/components/Hero2/Hero2";
import Supplier from "@/components/Supplier/Supplier";

export const metadata = {
  title: "Become A Supplier | Carter Oil",
  description:
    "Partner with Carteroil USA, a trusted supplier of premium lubricants. Join our network and grow your business with reliable solutions"
};
const heroData = [
  {
    title: "Become a Supplier",
    description:
      "Partner with Carteroil USA and join our global network of trusted suppliers. Together, we drive innovation, reliability, and excellence in lubrication solutions.",
    backgroundImage: "/supplier-hero.webp",
  },
];
const page = () => {
  return (
    <div>
      <Hero2 data={heroData[0]} />
      <Supplier />
      <ContactForm />
    </div>
  );
};

export default page;
