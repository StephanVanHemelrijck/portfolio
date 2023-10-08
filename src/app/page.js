import React from "react";
import Title from "./components/shared/Title";

const Home = () => {
  return (
    <div className="titleScreen">
      <h1>
        <Title text="Hi, I'm Stephan Van Hemelrijck" />
      </h1>
      <h2>
        <Title text="Full Stack Developer / Backend Developer" />
      </h2>
    </div>
  );
};

export default Home;
