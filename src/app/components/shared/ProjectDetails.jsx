"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "../../styles/components/projectDetails.module.scss";
import Title from "./Title";
import Skill from "../Skill";
import Button from "./Button";
import Image from "next/image";

const ProjectDetails = ({
  project,
  handleProjectNavigation,
  totalProjects,
  index,
}) => {
  const handleNavigation = (direction) => {
    handleProjectNavigation(direction);
  };

  return (
    <div
      className={`${styles.myProjects} ${styles.scrollItem}`}
      id="myprojects"
    >
      <div className={styles.projectInformation}>
        <div className={styles.information}>
          <p className={styles.category}>{project.category}</p>

          <h1 className={styles.title}>
            <Title text={project.title} />
          </h1>

          <p className={styles.text}>{project.description}</p>

          <p className={styles.listTitle}>Built with:</p>

          <ul>
            {project.builtWith.map((skill, index) => (
              <li key={index}>
                <Skill icon={skill.icon} color={skill.color} />
              </li>
            ))}
          </ul>

          <div className={styles.buttons}>
            {project.urls.demo && (
              <Button
                value="Demo"
                externalRedirect={true}
                href={project.urls.demo}
              />
            )}
            {project.urls.code && (
              <Button
                value="Code"
                externalRedirect={true}
                href={project.urls.code}
              />
            )}
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <Image
              src={project.image}
              layout="responsive"
              width={200}
              height={100}
              alt="showcase"
              loading="lazy"
              quality={100}
            />
          </div>
        </div>
      </div>

      <div className={styles.projectsNavigation}>
        <div onClick={() => handleNavigation("previous")}>&lt;</div>
        {totalProjects - 1 === index ? (
          <div className={styles.disabled}>&gt;</div>
        ) : (
          <div onClick={() => handleNavigation("next")}>&gt;</div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
