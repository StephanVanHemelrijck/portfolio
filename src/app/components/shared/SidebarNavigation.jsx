import React from "react";
import Button from "./Button";

const SidebarNavigation = () => {
  return (
    <div className="navigation">
      <Button />
      <section>
        <ul>
          <li>
            <a href="">Intro</a>
          </li>
          <li>
            <a href="">Skills</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default SidebarNavigation;
