import TermsAndConditions from "@/components/ExtraPages/TermsAndConditions";
import styles from "./page.module.css";
import Button2 from "@/components/Buttons/Button2";
export const metadata = {
  title: "Terms and Conditions",
  description:
    "Review the terms that define your experience with Carter Oil USA. Our policies ensure fairness, clarity, and confidence in every product and service we deliver.",
};

const page = () => {
  return (
    <div className={styles.termsPage}>
      <div className={styles.termsLayout}>
        <TermsAndConditions />
      </div>
    </div>
  );
};

export default page;
