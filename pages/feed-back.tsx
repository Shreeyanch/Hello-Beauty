import type { NextPage } from "next";
import Form from "../components/form";
import styles from "./feed-back.module.css";

const FeedBack: NextPage = () => {
  return (
    <div className={styles.feedback}>
      <div className={styles.shareYourTravelsForm}>
        <div className={styles.formHeader}>
          <img className={styles.image13Icon} alt="" src="/image-13@2x.png" />
          <div className={styles.helloBeautyAcademyContainer}>
            <p className={styles.helloBeautyAcademy}>Hello Beauty Academy</p>
            <p className={styles.unisexSalon}>{`& Unisex Salon`}</p>
          </div>
        </div>
        <Form />
      </div>
      
    </div>
  );
};

export default FeedBack;
