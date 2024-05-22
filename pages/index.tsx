import type { NextPage } from "next";
import { useCallback } from "react";
import Modal from "../components/modal";
import styles from "./index.module.css";

const Rating: NextPage = () => {
  const onLETTERLOGO2Click = useCallback(() => {
    window.open("https://www.samparka.info/");
  }, []);

  return (
    <div className={styles.rating}>
      <div className={styles.image12Parent}>
        <img className={styles.image12Icon} alt="" src="/image-12@2x.png" />
        <div className={styles.helloBeautyAcademyContainer}>
          <p className={styles.helloBeautyAcademy}>Hello Beauty Academy</p>
          <p className={styles.unisexSalon}>{`& Unisex Salon`}</p>
        </div>
        <div className={styles.modalWrapper}>
          <Modal />
        </div>
        
      </div>
    </div>
  );
};

export default Rating;
