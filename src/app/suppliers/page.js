import ContactForm from "@/components/ContactUs/ContactForm";
import Hero2 from "@/components/Hero2/Hero2";
import Supplier from "@/components/Supplier/Supplier";

export const metadata = {
  title: "Become A Supplier | Carter Oil",
  description:
    "Partner with Carteroil USA as a trusted supplier. Join our network to deliver premium lubricants and grow your business with us.",
};
const heroData = [
  {
    title: "Become a Supplier",
    description:
      "Partner with Carteroil USA and join our global network of trusted suppliers. Together, we drive innovation, reliability, and excellence in lubrication solutions.",
    backgroundImage: "/service-hero.jpg",
  },
];
const page = () => {
  return (
    <div>
      <Hero2 data={heroData[0]} />
      <Supplier/>
      <ContactForm />
    </div>
  );
};

export default page;
