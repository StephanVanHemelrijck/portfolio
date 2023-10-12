"use client";
import React from "react";
import Title from "./components/shared/Title";
import { useEffect, useState, useRef } from "react";
import UnderConstruction from "./components/UnderConstruction";
import IntroPage from "./components/introPage";
import SkillsPage from "./components/skillsPage";
import styles from "./styles/pages/page.module.scss";
import SidebarNavigation from "./components/shared/SidebarNavigation";
import ContactPage from "./components/contactPage";
import ProjectPage from "./components/projectPage";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("intro");
  const containerRef = useRef(null);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const container = containerRef.current;

    const options = {
      root: container,
      rootMargin: "40px", //
      threshold: 1, // 0.5 means 50% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id === "") return;
          setCurrentSection(entry.target.id);
        }
      });
    }, options);

    // observe options
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    // clean up when component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {isModalOpen && <UnderConstruction onClose={closeModal} />}
      <article className={styles.scroller}>
        <IntroPage />
        <SkillsPage />
        <ProjectPage />
        <ContactPage />
      </article>
      <SidebarNavigation selected={currentSection} />
    </>
  );
};

export default Home;
