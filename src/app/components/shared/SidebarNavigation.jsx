"use client";
import React, { useState, useEffect } from "react";
import styles from "../../styles/components/sidebarNavigation.module.scss";
import Footer from "./Footer";

const SidebarNavigation = ({ selected }) => {
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    console.log(selected);

    if (selected === "contact") setScrollDirection("up");
    else setScrollDirection("down");
  }, [selected]);

  return (
    <>
      {/* Import footer here, so I can pass along the scroll direction */}
      <Footer scrollDirection={scrollDirection} />
      <section className={styles.navigation}>
        <ul>
          <li>
            <a href="#intro">Intro</a>
            {selected === "intro" && (
              <div className={styles.navigationLine}></div>
            )}
          </li>
          <li>
            <a href="#skills">Skills</a>
            {selected === "skills" && (
              <div className={styles.navigationLine}></div>
            )}
          </li>
          <li>
            <a href="#projects">Projects</a>
            {selected === "projects" && (
              <div className={styles.navigationLine}></div>
            )}
          </li>
          <li>
            <a href="#contact">Contact</a>
            {selected === "contact" && (
              <div className={styles.navigationLine}></div>
            )}
          </li>
        </ul>
      </section>
    </>
  );
};

export default SidebarNavigation;
