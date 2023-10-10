import React from "react";
import Title from "./shared/Title";
import styles from "../styles/pages/introPage.module.scss";

const IntroPage = () => {
  return (
    <section className={styles.titleScreen} id="intro">
      <h1>
        <Title text="Hi, I'm Stephan Van Hemelrijck" />
      </h1>
      <h2>
        <Title text="Full Stack Developer / Backend Developer" />
      </h2>
    </section>
  );
};

export default IntroPage;
