import React from "react";
import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";

const HomeComp: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Hero />
    </div>
  );
};

export default HomeComp;
