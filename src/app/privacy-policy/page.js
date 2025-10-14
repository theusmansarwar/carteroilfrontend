import PrivacyPolicy from "@/components/ExtraPages/PrivacyPolicy";
import styles from "./page.module.css";
import Button2 from "@/components/Buttons/Button2";

export const metadata = {
  title: "Terms and Conditions | Carter Oil",
  description:
    "DigitalAura offers SEO, PPC, branding, social media, and YouTube automation to help your business gain visibility, leads, and long-term growth.",
};

const page = () => {
  return (
    <div className={styles.privacyPage}>
      <div className={styles.privacyLayout}>
        <PrivacyPolicy />
      </div>
    </div>
  );
};

export default page;
