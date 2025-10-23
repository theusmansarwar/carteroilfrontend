import Faqs from "@/components/Faqs/Faqs";
import ServicesCards from "@/components/ServicesCards/ServicesCards";

export const metadata = {
  title: "Products & Services | Carter Oil",
  description:
    "Ready to scale? Get YouTube automation, SEO, social media design, and complete digital marketing services that help your business shine across platforms.",
};
const servicesFaqs = {
  title: "Frequently asked Questions",
  description:
    "Welcome to the CarterOil FAQs page! Here, you can find answers to common questions about the lubricants, oilfield services, equipment, and operations we provide around the world. Our goal is to help you understand the solutions we offer and support the work of your business.",
  questions: [
    {
      question: "What industries does CarterOil service?",
      answer:
        "CarterOil offers products for many industries, including automotive, industrial, marine, and specialty. You can find oilfield equipment, racing oils, and complete oilfield services.",
    },

    {
      question:
        "How can CarterOil provide support for a fleet of older vehicles?",
      answer:
        "Advanced lubricants are needed to improve fuel economy and reduce engine wear. CarterOil's experts can provide recommendations on the best oils and maintenance schedules. Your vehicle will run smoothly, good engine, and reduce your repair costs.",
    },
    {
      question: "Are CarterOil's products API compliant?",
      answer:
        "CarterOil lubricants are made to meet the standards of the American Petroleum Institute. You get products that provide good quality, strong performance, and safety for all your equipment.",
    },
    {
      question: "How do I obtain a quotation for services and products?",
      answer:
        "Getting a quote is easy. You can contact CarterOil through the website, phone, and email. Our team will check your needs and suggest the best products and services. Then you will get a clear and detailed quote.",
    },
    {
      question: "Is CarterOil available internationally?",
      answer:
        "CarterOil serves customers in many countries. You can order products in the Americas, Latin America, and other markets. ",
    },
    {
      question: "How does CarterOil ensure product quality?",
      answer:
        "CarterOil has over 100 years of experience and uses the latest technology in its products. Each product is checked carefully to meet the international standards. It gives the protection, performance, and reliability that all equipment needs.",
    },
    {
      question: "How can I choose the right lubricant?",
      answer:
        "The right lubricant depends on the type of machine, the conditions it works in, and the needs of the operation. CarterOil specialists provide guidance. Providing details about the equipment and its use helps select products that make machines last longer and work better.",
    },
    {
      question: "Does CarterOil provide marine lubricants?",
      answer:
        "CarterOil makes marine lubricants for tough conditions at sea. They protect engines from rust, deposits, and wear. It ensures engines remain safe, work well, and last longer even in hard environments.",
    },
    {
      question: "What oilfield services are available?",
      answer:
        "CarterOil provides a full range of oilfield services for all types of projects. The services include tubing fabrication, control panel creation, inspections, and equipment rentals. Support is available in both onshore and offshore locations. It helps the operations of your business run smoothly and safely.",
    },
    {
      question: "Can I get technical support for equipment or lubricants?",
      answer:
        "CarterOil has a team of specialists ready to help you with technical guidance. They assist with choosing the right products, using them correctly, and making sure they fit your equipment. You can trust the team to solve issues and improve the performance.",
    },
    {
      question: "How long does delivery take?",
      answer:
        "Delivery depends on the location and the type of products ordered. The Carter Oil works with logistics partners. The team gives estimated delivery dates and provides updates.",
    },
    {
      question: "Who can I contact for further questions?",
      answer:
        "You can reach the team for any questions. They give answers, advice on products, and help with any issues. You get the support needed to keep your equipment and operations running well.",
    },
  ],
};

const page = () => {
  return (
    <div>
      <ServicesCards />
      <Faqs data={servicesFaqs} />
    </div>
  );
};

export default page;
