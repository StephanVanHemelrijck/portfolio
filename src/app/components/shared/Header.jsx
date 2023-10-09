import React from "react";
import Logo from "../logo";
import Button from "./Button";

const Header = () => {
  return (
    <div className="headerWrapper">
      <Logo />
      <Button value={"Contact"} href={"/"} />
    </div>
  );
};

export default Header;
