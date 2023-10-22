import { useState } from "react";
import Icon from "@mdi/react";
import "./sidebar.css";
import {
  mdiAccount,
  mdiLinkVariant,
  mdiCertificate,
  mdiSchool,
  mdiFolder,
  mdiBriefcase,
  mdiBrain,
} from "@mdi/js";

const Sidebar = () => {
  return (
    <nav className='sidebar'>
      <Nav />
    </nav>
  );
};

const Nav = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <ul>
      <ListItem
        icon={mdiAccount}
        title='Personal Details'
        onClick={() => setActiveIndex(0)}
        isActive={activeIndex === 0}
      />
      <ListItem
        icon={mdiLinkVariant}
        title='Links'
        onClick={() => setActiveIndex(1)}
        isActive={activeIndex === 1}
      />
      <ListItem
        icon={mdiBrain}
        title='Skills'
        onClick={() => setActiveIndex(2)}
        isActive={activeIndex === 2}
      />
      <ListItem
        icon={mdiBriefcase}
        title='Work Experience'
        onClick={() => setActiveIndex(3)}
        isActive={activeIndex === 3}
      />
      <ListItem
        icon={mdiFolder}
        title='Projects'
        onClick={() => setActiveIndex(4)}
        isActive={activeIndex === 4}
      />
      <ListItem
        icon={mdiSchool}
        title='Education'
        onClick={() => setActiveIndex(5)}
        isActive={activeIndex === 5}
      />
      <ListItem
        icon={mdiCertificate}
        title='Certifications'
        onClick={() => setActiveIndex(6)}
        isActive={activeIndex === 6}
      />
    </ul>
  );
};

const ListItem = ({ icon, title, onClick, isActive }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <li
      className='nav-item'
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={onClick}
      style={{
        backgroundColor: isActive || isHovered ? "#022c22" : "inherit",
        color: isActive || isHovered ? "#f1f5f9" : "#022c22",
      }}
    >
      <Icon
        path={icon}
        size={2}
        color={isActive || isHovered ? "#f1f5f9" : "#022c22"}
        title={title}
      />
      <a href='#'>{title}</a>
    </li>
  );
};

export default Sidebar;
