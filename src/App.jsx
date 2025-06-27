import React from "react";
import About from "./comonents/About/About";
import Navbar from "./comonents/Navbar/Navbar";
import Skill from "./comonents/Skill/Skill";
import Work from "./comonents/Work/Work";
import Education from "./comonents/Education/Education";
import Contact from "./comonents/Contact/Contact";
import Footer from "./comonents/Footer/Footer";
import BlurBlob from "./BlurBlob";

const App = () => {
  return (
    <div className="bg-[#050414]">
      <BlurBlob
        position={{ top: "35%", left: "20%" }}
        size={{ width: "30%", height: "40%" }}
      />
      <div className="relative pt-20">
        <Navbar />
        <About />
        <Skill />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
