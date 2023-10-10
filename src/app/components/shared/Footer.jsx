"use client";
import React from "react";
import styles from "../../styles/components/footer.module.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = ({ scrollDirection }) => {
  return (
    <div className={styles.footer}>
      <div className={styles.socials}>
        <a href="https://github.com/StephanVanHemelrijck" target="blank">
          <FaGithub size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/stephan-van-hemelrijck-736655234/"
          target="blank"
        >
          <FaLinkedin size={30} />
        </a>
      </div>
      <div className={styles.scrollDown}>
        <span className={styles.scrollText}>Scroll {scrollDirection}</span>
        {scrollDirection === "down" ? (
          <span className={styles.scrollArrowDown}>&gt;</span>
        ) : (
          <span className={styles.scrollArrowUp}>&lt;</span>
        )}
      </div>
    </div>
  );
};

export default Footer;
