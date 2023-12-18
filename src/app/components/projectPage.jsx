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

  const handleMoveArrow = (e) => {
    if (e.type === "mouseenter") {
      spanRef.current.style.left = "10px";
    } else {
      spanRef.current.style.left = "0px";
    }
  };

  const projects = [
    {
      category: "Web Application",
      title: "Final Show Showcase",
      description:
        "A web application that allows students of Erasmushogeschool Brussels to showcase their final work.",
      builtWith: [
        { icon: "FaJs", color: "#F0DB4F" },
        { icon: "FaNodeJs", color: "#61DBFB" },
        { icon: "FaHtml5", color: "#E34F26" },
      ],
      urls: {
        demo: "https://multimedia.brussels",
        code: "https://github.com/ehb-MCT/fp4-showcase",
      },
      image: "/images/finalwork-showcase.png",
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
              onClick={() => setContent("my-projects")}
            >
              See Projects <span ref={spanRef}>&gt;</span>
            </p>
          </div>
        )}

        {content === "my-projects" && (
          <ProjectDetails setContent={setContent} project={projects[0]} />
        )}
      </div>
    </section>
  );
};

export default ProjectPage;
