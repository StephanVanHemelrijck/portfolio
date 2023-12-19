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
          Just a heads up that the scroll wheel experience is still under
          construction. <br /> <br /> You can still navigate through the page
          using either the navigation bar or the arrow keys.
          <br /> <br /> Thanks for your patience!
        </p>
        <Button listener={"click"} action={onClose} value={"Close"} />
      </div>
    </div>
  );
};

export default UnderConstruction;
