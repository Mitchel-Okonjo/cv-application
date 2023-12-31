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

const Sidebar = ({ isOpen, onClick, activeIndex }) => {
  return (
    <nav className={isOpen ? "sidebar active" : "sidebar"}>
      <Nav onClick={onClick} activeIndex={activeIndex} />
    </nav>
  );
};

const Nav = ({ onClick, activeIndex }) => {
  return (
    <ul>
      <ListItem
        icon={mdiAccount}
        title='Personal Details'
        onClick={() => onClick(0)}
        isActive={activeIndex === 0}
      />
      <ListItem
        icon={mdiLinkVariant}
        title='Links'
        onClick={() => onClick(1)}
        isActive={activeIndex === 1}
      />
      <ListItem
        icon={mdiBrain}
        title='Skills'
        onClick={() => onClick(2)}
        isActive={activeIndex === 2}
      />
      <ListItem
        icon={mdiBriefcase}
        title='Work Experience'
        onClick={() => onClick(3)}
        isActive={activeIndex === 3}
      />
      <ListItem
        icon={mdiFolder}
        title='Projects'
        onClick={() => onClick(4)}
        isActive={activeIndex === 4}
      />
      <ListItem
        icon={mdiSchool}
        title='Education'
        onClick={() => onClick(5)}
        isActive={activeIndex === 5}
      />
      <ListItem
        icon={mdiCertificate}
        title='Certifications'
        onClick={() => onClick(6)}
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

export { Sidebar };
