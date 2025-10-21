import Faqs from "@/components/Faqs/Faqs";
import ServicesCards from "@/components/ServicesCards/ServicesCards";

export const metadata = {
  title: "Products & Services | Carter Oil",
  description:
    "Ready to scale? Get YouTube automation, SEO, social media design, and complete digital marketing services that help your business shine across platforms.",
};
const servicesFaqs = {
  title: "FAQs",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac suscipit justo. Integer vitae magna et justo porta commodo. Nulla facilisi. Cras faucibus risus at neque dignissim, in varius turpis vestibulum. Nam at eros sem. Curabitur at commodo orci. Sed sagittis nunc ac neque ultrices, in pulvinar massa porttitor.",
  questions: [
    {
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium sem at justo ultricies, a cursus ipsum finibus. Suspendisse id magna euismod, accumsan sapien et, sodales nisi. Integer non elit id leo tincidunt commodo.",
    },
   
    {
      question: "Donec sagittis lorem ut ligula congue varius?",
      answer:
        "Suspendisse finibus risus non libero euismod, ut tristique massa porta. Cras tincidunt lacus et nisi interdum, nec ultrices sapien porta. Vivamus et mattis lorem, ac vehicula erat.",
    },
    {
      question: "Mauris faucibus risus in libero pharetra aliquet?",
      answer:
        "Nam porta libero non luctus luctus. Phasellus a nisi ac urna lacinia dignissim. Etiam accumsan erat sed nulla ullamcorper, nec egestas justo facilisis. Duis nec tincidunt diam.",
    },
    {
      question: "Aenean efficitur elit vel risus imperdiet vehicula?",
      answer:
        "Proin consequat risus nec ipsum luctus, nec scelerisque enim posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Aenean non turpis ac sem tincidunt rutrum.",
    },
    {
      question: "Vestibulum pharetra neque non enim dignissim euismod?",
      answer:
        "Sed blandit lorem ac mi blandit, ac dignissim nulla commodo. Integer a eros eget odio condimentum sagittis. Suspendisse ut magna vel mi pulvinar imperdiet.",
    },
    {
      question: "Phasellus ullamcorper metus sit amet turpis tincidunt?",
      answer:
        "Cras vitae libero ut massa facilisis viverra. Mauris laoreet metus ut mi iaculis, ut convallis neque tristique. Aenean ac felis eu eros dictum interdum.",
    },
    {
      question: "Morbi non tortor vitae arcu viverra malesuada?",
      answer:
        "Integer id eros vitae erat ullamcorper sagittis. Vestibulum nec mi eget libero porttitor suscipit. Pellentesque euismod, velit sed hendrerit euismod, arcu magna cursus massa, vitae viverra ligula elit vel nisl.",
    },
    {
      question: "Praesent at risus nec purus commodo tristique?",
      answer:
        "Mauris eu purus ac odio lacinia tincidunt. Suspendisse potenti. Ut vel diam faucibus, bibendum sapien sed, laoreet augue. Etiam vulputate nisl ac nisl aliquet maximus.",
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
