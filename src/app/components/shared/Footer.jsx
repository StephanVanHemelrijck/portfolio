import React from "react";
import styles from "../../styles/components/footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.socials}>
        <p>Github</p>
        <p>LinkedIn</p>
      </div>
      <div className={styles.scrollDown}>
        <span className={styles.scrollText}>Scroll Down</span>
        <span className={styles.scrollArrow}>&gt;</span>
      </div>
    </div>
  );
};

export default Footer;
