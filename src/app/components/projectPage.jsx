"use client";
import React from "react";
import styles from "../styles/pages/projectPage.module.scss";
import Title from "./shared/Title";
import { useRef } from "react";
import Skill from "./Skill";
import Button from "./shared/Button";

const ProjectPage = () => {
  const spanRef = useRef(null);

  const handleMoveArrow = (e) => {
    if (e.type === "mouseenter") {
      spanRef.current.style.left = "10px";
    } else {
      spanRef.current.style.left = "0px";
    }
  };

  return (
    <section className={styles.projectPage} id="projects">
      <div className={styles.scrollContent}>
        <div className={styles.scrollItem}>
          <h1>
            <Title text="Previous Projects" />
          </h1>
          <p className={styles.text}>
            Turning ideas into real life projects is my calling. I love to
            create and build things that people can use and enjoy. Check out my
            projects and see what I&rsquo;ve been working on throughout my
            student career.
          </p>
          <a
            href="#myprojects"
            className={styles.redirect}
            onMouseEnter={(e) => handleMoveArrow(e)}
            onMouseLeave={(e) => handleMoveArrow(e)}
          >
            See Projects <span ref={spanRef}>&gt;</span>
          </a>
        </div>
        <div className={styles.scrollItem} id="myprojects">
          <div className={styles.information}>
            <p className={styles.category}>Web Application</p>

            <h1 className={styles.title}>
              <Title text="RouteExplorer" />
            </h1>

            <p className={styles.text}>
              A school project for my 2nd year of my degree. It is a website
              that lets you create cycling routes.
            </p>

            <p className={styles.listTitle}>Built with:</p>

            <ul>
              <li>
                <Skill icon="FaJs" color={"#F0DB4F"} />
              </li>
              <li>
                <Skill icon="FaNodeJs" color={"#61DBFB"} />
              </li>
              <li>
                <Skill icon="FaHtml5" color={"#E34F26"} />
              </li>
            </ul>

            <div className={styles.buttons}>
              <Button
                value="Demo"
                externalRedirect={true}
                href={"https://github.com/StephanVanHemelrijck"}
              />
              <Button
                value="Code"
                externalRedirect={true}
                href={"https://github.com/StephanVanHemelrijck"}
              />
            </div>
          </div>
          <div className={styles.imageContainer}>
            <img src="/images/routeexplorer.png" alt="RouteExplorer" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
