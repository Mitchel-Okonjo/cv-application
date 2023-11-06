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
  const [skillsIndex, setSkillsIndex] = useState(0);

  const [personalValues, setPersonalValues] = useState({
    fullName: "",
    jobTitle: "",
    email: "",
    phone: "",
    address: "",
    summary: "",
  });

  const [links, setLinks] = useState({
    websiteUrl: "",
    websiteText: "",
    linkedinUrl: "",
    linkedinText: "",
    githubUrl: "",
    githubText: "",
  });

  const [skillsAndLang, setSkillsAndLang] = useState([
    {
      id: "skills",
      skills: ["", "", ""],
    },

    {
      id: "languages",
      languages: ["", "", ""],
    },
  ]);

  const handleLinksChange = (obj) => {
    setLinks(obj);
  };

  const handleInputChange = (obj) => {
    setPersonalValues(obj);
  };

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
        handleInputChange={handleInputChange}
        personalValues={personalValues}
        links={links}
        handleLinksChange={handleLinksChange}
        skillsAndLang={skillsAndLang}
        setSkillsAndLang={setSkillsAndLang}
        skillsIndex={skillsIndex}
        setSkillsIndex={setSkillsIndex}
      />
      <Livesheet />
    </>
  );
}

export default App;
