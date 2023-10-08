"use client";
import React from "react";
import { useEffect, useState } from "react";

const Logo = () => {
  const [logo, setLogo] = useState("");

  useEffect(() => {
    // Delete or add '_' to logo every 500ms
    const interval = setInterval(() => {
      logo === "_" ? setLogo("") : setLogo("_");
    }, 500);
  }, []);

  return (
    <>
      <p className="logo">&lt;/&gt; stephanvh.{logo}</p>
    </>
  );
};

export default Logo;
