"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/pages/projectPage.module.scss";
import Title from "./shared/Title";
import Skill from "./Skill";
import Button from "./shared/Button";
import Image from "next/image";
import ProjectDetails from "./shared/ProjectDetails";

const ProjectPage = () => {
  const spanRef = useRef(null);
  const [content, setContent] = useState("previous-projects");
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [newSelectedProjectIndex, setNewSelectedProjectIndex] =
    useState(selectedProjectIndex);
  const [navigationDirection, setNavigationDirection] = useState(null);

  const handleMoveArrow = (e) => {
    if (e.type === "mouseenter") {
      spanRef.current.style.left = "10px";
    } else {
      spanRef.current.style.left = "0px";
    }
  };

  const handleProjectNavigation = (direction) => {
    let moveBy = 0;
    if (direction === "next") moveBy = +1;
    if (direction === "previous") moveBy = -1;

    setNewSelectedProjectIndex(selectedProjectIndex + moveBy);
    setNavigationDirection(direction);
  };

  useEffect(() => {
    // if index < 0 => go to previous project
    if (newSelectedProjectIndex < 0 && navigationDirection === "previous") {
      setContent("previous-projects");
    }

    // if index > length of projects => disable going to next project
    if (
      newSelectedProjectIndex > projects.length - 1 &&
      navigationDirection === "next"
    )
      return;

    // navigate to either next or previous project
    setSelectedProjectIndex(newSelectedProjectIndex);
  }, [newSelectedProjectIndex, navigationDirection]);

  const projects = [
    {
      category: "Web Application",
      title: "Final Show Showcase",
      description:
        "A web application that allows students of Erasmushogeschool Brussels to showcase their final work.",
      builtWith: [
        { icon: "FaJs", color: "#F0DB4F" },
        { icon: "FaNodeJs", color: "#3C873A" },
        { icon: "FaHtml5", color: "#E34F26" },
      ],
      urls: {
        demo: "https://multimedia.brussels",
        code: "https://github.com/ehb-MCT/fp4-showcase",
      },
      image: "/images/finalwork-showcase.png",
    },
    {
      category: "Web Application",
      title: "Login - Prototype",
      description:
        "A prototype of a login page that can be used in web applications. Made for expert lab",
      builtWith: [
        { icon: "FaJs", color: "#F0DB4F" },
        { icon: "FaAngular", color: "#DD0031" },
        { icon: "FaSass", color: "#CD6799" },
        { icon: "FaNodeJs", color: "#3C873A" },
      ],
      urls: {
        demo: "https://login-frontend-x06a.onrender.com/",
        code: "https://github.com/StephanVanHemelrijck/prototype-login",
      },
      image: "/images/login.png",
    },
    {
      category: "Web Application",
      title: "File Upload - Prototype",
      description:
        "A prototype of a file upload page that can be used in web applications. Made for expert lab",
      builtWith: [
        { icon: "FaReact", color: "#61DBFB" },
        { icon: "FaNodeJs", color: "#3C873A" },
        { icon: "FaHtml5", color: "#E34F26" },
      ],
      urls: {
        demo: "https://frontend-file-upload.onrender.com/",
        code: "https://github.com/StephanVanHemelrijck/prototype-03-frontend",
      },
      image: "/images/file-upload.png",
    },
    {
      category: "Web Application",
      title: "Torfs Scraper",
      description:
        "A web scraper that scrapes the website of Torfs and displays the data on a plain website.",
      builtWith: [
        { icon: "FaJs", color: "#F0DB4F" },
        { icon: "FaNodeJs", color: "#3C873A" },
        { icon: "FaHtml5", color: "#E34F26" },
      ],
      urls: {
        demo: "https://streamable.com/3j4i3b",
        code: "https://github.com/StephanVanHemelrijck/scraper",
      },
      image: "/images/torfs-scraper.png",
    },
  ];

  return (
    <section className={styles.projectPage} id="projects">
      <div className={styles.scrollContent}>
        {content === "previous-projects" && (
          <div className={`${styles.scrollItem} ${styles.previousProjects}`}>
            <h1 className={styles.title}>
              <Title text="Previous Projects" />
            </h1>
            <p className={styles.text}>
              Turning ideas into real life projects is my calling. I love to
              create and build things that people can use and enjoy. Check out
              my projects and see what I&rsquo;ve been working on throughout my
              student career.
            </p>
            <p
              className={styles.redirect}
              onMouseEnter={(e) => handleMoveArrow(e)}
              onMouseLeave={(e) => handleMoveArrow(e)}
              onClick={() => {
                setContent("my-projects");
                setSelectedProjectIndex(0);
                setNewSelectedProjectIndex(0);
              }}
            >
              See Projects <span ref={spanRef}>&gt;</span>
            </p>
          </div>
        )}

        {content === "my-projects" && (
          <ProjectDetails
            project={projects[selectedProjectIndex]}
            totalProjects={projects.length}
            handleProjectNavigation={handleProjectNavigation}
            index={selectedProjectIndex}
          />
        )}
      </div>
    </section>
  );
};

export default ProjectPage;
