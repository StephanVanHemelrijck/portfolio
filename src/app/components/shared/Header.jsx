import React from "react";
import Logo from "../logo";
import Button from "./Button";
import styles from "../../styles/components/header.module.scss";

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <Logo />
      <Button value={"Contact"} href={"#contact"} />
    </div>
  );
};

export default Header;
