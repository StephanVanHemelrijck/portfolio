"use client";
import React from "react";
import Title from "./components/shared/Title";
import { useEffect, useState } from "react";
import UnderConstruction from "./components/UnderConstruction";
import IntroPage from "./components/introPage";
import SkillsPage from "./components/skillsPage";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && <UnderConstruction onClose={closeModal} />}
      <IntroPage />
      <SkillsPage />
    </>
  );
};

export default Home;
