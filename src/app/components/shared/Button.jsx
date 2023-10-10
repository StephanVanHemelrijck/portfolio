"use client";
import React from "react";
import { useRef, useState, useEffect } from "react";
import styles from "../../styles/components/button.module.scss";

const Button = ({
  href = undefined,
  value,
  listener,
  action,
  externalRedirect = false,
}) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    buttonRef.current.addEventListener(listener, action);
  }, [listener, action]);

  return (
    <button className={styles.button} ref={buttonRef}>
      {href ? (
        <a href={href} target={externalRedirect ? "_blank" : ""}>
          {value}
        </a>
      ) : (
        <p>{value}</p>
      )}
    </button>
  );
};

export default Button;
