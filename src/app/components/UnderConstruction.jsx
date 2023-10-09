import React from "react";
import styles from "../styles/components/underConstruction.module.scss";
import Button from "./shared/Button";

const UnderConstruction = ({ onClose }) => {
  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modal}>
        <div onClick={onClose} className={styles.closeIcon}>
          X
        </div>
        <h2>Under Construction</h2>
        <p>
          My portfolio is a work in progress, some data may not be entirely
          accurate at this early stage. Thanks for your patience!
        </p>
        <Button listener={"click"} action={onClose} value={"Close"} />
      </div>
    </div>
  );
};

export default UnderConstruction;
