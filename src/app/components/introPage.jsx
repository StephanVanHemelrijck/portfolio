import React from "react";
import Title from "./shared/Title";
import styles from "../styles/pages/introPage.module.scss";

const IntroPage = () => {
  return (
    <div className={styles.titleScreen}>
      <h1>
        <Title text="Hi, I'm Stephan Van Hemelrijck" />
      </h1>
      <h2>
        <Title text="Full Stack Developer / Backend Developer" />
      </h2>
    </div>
  );
};

export default IntroPage;
