import TermsAndConditions from "@/components/ExtraPages/TermsAndConditions";
import styles from "./page.module.css";
import Button2 from "@/components/Buttons/Button2";
export const metadata = {
  title: "Terms and Conditions | Carter Oil",
  description:
    "DigitalAura offers SEO, PPC, branding, social media, and YouTube automation to help your business gain visibility, leads, and long-term growth.",
};

const page = () => {
  return (
    <div className={styles.termsPage}>
      <Button2 label={"Terms and Conditions"} />
      <div className={styles.termsLayout}>
        <TermsAndConditions />
      </div>
    </div>
  );
};

export default page;
