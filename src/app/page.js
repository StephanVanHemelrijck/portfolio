"use client";
import React from "react";
import Title from "./components/shared/Title";
import { useEffect, useState } from "react";
import UnderConstruction from "./components/UnderConstruction";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && <UnderConstruction onClose={closeModal} />}
      <div className="titleScreen">
        <h1>
          <Title text="Hi, I'm Stephan Van Hemelrijck" />
        </h1>
        <h2>
          <Title text="Full Stack Developer / Backend Developer" />
        </h2>
      </div>
    </>
  );
};

export default Home;
