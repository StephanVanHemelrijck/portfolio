"use client";
import React, { useState, useEffect } from "react";
import styles from "../../styles/components/sidebarNavigation.module.scss";

const SidebarNavigation = ({ selected }) => {
  return (
    <section className={styles.navigation}>
      <ul>
        <li>
          <a href="#intro" onClick={() => handleChangeSelected("intro")}>
            Intro
          </a>
          {selected === "intro" && (
            <div className={styles.navigationLine}></div>
          )}
        </li>
        <li>
          <a href="#skills" onClick={() => handleChangeSelected("skills")}>
            Skills
          </a>
          {selected === "skills" && (
            <div className={styles.navigationLine}></div>
          )}
        </li>
        <li>
          <a href="#projects" onClick={() => handleChangeSelected("projects")}>
            Projects
          </a>
          {selected === "projects" && (
            <div className={styles.navigationLine}></div>
          )}
        </li>
        <li>
          <a href="#contact" onClick={() => handleChangeSelected("contact")}>
            Contact
          </a>
          {selected === "contact" && (
            <div className={styles.navigationLine}></div>
          )}
        </li>
      </ul>
    </section>
  );
};

export default SidebarNavigation;
