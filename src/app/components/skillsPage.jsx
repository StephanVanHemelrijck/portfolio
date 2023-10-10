import React from "react";
import styles from "../styles/pages/skillsPage.module.scss";
import Skill from "./Skill";
import Title from "./shared/Title";

const SkillsPage = () => {
  const skills = [
    {
      name: "Reactjs",
      icon: "FaReact",
      color: "#61DBFB",
    },
    {
      name: "JavaScript",
      icon: "FaJs",
      color: "#F0DB4F",
    },
    {
      name: "HTML",
      icon: "FaHtml5",
      color: "#E34F26",
    },
    {
      name: "CSS",
      icon: "FaCss3Alt",
      color: "#2965f1",
    },
    {
      name: "Bootstrap",
      icon: "FaBootstrap",
      color: "#563d7c",
    },
    {
      name: "Nodejs",
      icon: "FaNodeJs",
      color: "#3C873A",
    },
    {
      name: "Git",
      icon: "FaGitAlt",
      color: "#F05032",
    },
    {
      name: "Firebase",
      icon: "FaFireAlt",
      color: "#FFCA28",
    },
    {
      name: "MySQL",
      icon: "FaDatabase",
      color: "#4479A1",
    },
    {
      name: "Laravel",
      icon: "FaLaravel",
      color: "#FF2D20",
    },
    {
      name: "PHP",
      icon: "FaPhp",
      color: "#777BB4",
    },
    {
      name: "Sass",
      icon: "FaSass",
      color: "#CC6699",
    },
  ];

  return (
    <div className={styles.skillsPage}>
      <>
        {/* TODO: prompt to chat gpt to make a new quote */}
        <p className={styles.prompt}>
          NOT SOLVING A PROBLEM IS AN OPPORTUNITY MISSED
        </p>
        <h1>
          <Title text="Skills & Experience" />
        </h1>
        <div className={styles.skillsList}>
          <ul>
            {skills.map((skill) => (
              <li key={skill.name}>
                <Skill
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                  color={skill.color}
                />
              </li>
            ))}
          </ul>
        </div>
      </>
    </div>
  );
};

export default SkillsPage;
