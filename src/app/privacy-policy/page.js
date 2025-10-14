import PrivacyPolicy from "@/components/ExtraPages/PrivacyPolicy";
import styles from "./page.module.css";

export const metadata = {
  title: "Privacy Policy | Carter Oil",
  description:
    "Discover how Carter Oil USA protects your personal data and keeps your information secure. We value your privacy and are committed to transparency, safety, and trust at every step.",
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
