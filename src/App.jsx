import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Sidebar } from "./sidebar/sidebar.jsx";
import NavBtn from "./navBtn/navBtn.jsx";
import Form from "./form/form";
import Livesheet from "./livesheet/livesheet";
import "./App.css";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [formHeading, setFormHeading] = useState("Personal Details");

  const handleMenuClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const changeNav = (index) => {
    setActiveIndex(index);
    changeHeading(index);
  };

  const changeHeading = (index) => {
    switch (index) {
      case 0:
        setFormHeading("Personal Details");
        break;
      case 1:
        setFormHeading("Links");
        break;
      case 2:
        setFormHeading("Skills & Languages");
        break;
      case 3:
        setFormHeading("Work Experience");
        break;
      case 4:
        setFormHeading("Projects");
        break;
      case 5:
        setFormHeading("Education");
        break;
      case 6:
        setFormHeading("Certifications");
        break;
    }
  };

  return (
    <>
      <NavBtn onClick={handleMenuClick} isOpen={isSidebarOpen} />
      <Sidebar
        isOpen={isSidebarOpen}
        onClick={changeNav}
        activeIndex={activeIndex}
      />
      <Form
        heading={formHeading}
        activeIndex={activeIndex}
        onClick={changeNav}
      />
      <Livesheet />
    </>
  );
}

export default App;
