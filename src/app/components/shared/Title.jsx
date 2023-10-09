"use client";
import React, { useEffect, useState } from "react";
import styles from "../../styles/components/title.module.scss";

const Title = ({ text }) => {
  const [textArray, setTextArray] = useState([]);

  useEffect(() => {
    // convert text into array of characters
    const textArray = text.split("");
    setTextArray(textArray);
  }, [text]);

  return (
    <>
      {textArray.map((letter, index) => {
        return (
          <span className={styles.titleSpan} key={index}>
            {letter}
          </span>
        );
      })}
    </>
  );
};

export default Title;
