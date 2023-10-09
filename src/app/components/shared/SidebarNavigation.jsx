"use client";
import React, { useState, useEffect } from "react";
import styles from "../../styles/components/sidebarNavigation.module.scss";

const SidebarNavigation = () => {
  const [selected, setSelected] = useState("intro");

  const handleChangeSelected = (value) => {
    setSelected(value);
  };

  return (
    <section className={styles.navigation}>
      <ul>
        <li>
          <p onClick={() => handleChangeSelected("intro")}>Intro</p>
          {selected === "intro" && (
            <div className={styles.navigationLine}></div>
          )}
        </li>
        <li>
          <p onClick={() => handleChangeSelected("skills")}>Skills</p>
          {selected === "skills" && (
            <div className={styles.navigationLine}></div>
          )}
        </li>
        <li>
          <p onClick={() => handleChangeSelected("projects")}>Projects</p>
          {selected === "projects" && (
            <div className={styles.navigationLine}></div>
          )}
        </li>
        <li>
          <p onClick={() => handleChangeSelected("contact")}>Contact</p>
          {selected === "contact" && (
            <div className={styles.navigationLine}></div>
          )}
        </li>
      </ul>
    </section>
  );
};

export default SidebarNavigation;
