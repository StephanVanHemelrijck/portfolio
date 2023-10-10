import React from "react";
import * as Icons from "react-icons/fa";
import styles from "../styles/components/skill.module.scss";

const Skill = ({ name = "", icon, color }) => {
  const Icon = Icons[icon];

  return (
    <>
      <div className={styles.skill}>
        <div className={styles.icon}>
          <Icon style={{ color: color }} />
        </div>
        {name && <p className={styles.name}>{name}</p>}
      </div>
    </>
  );
};

export default Skill;
