import { useState } from "react";
import "./navBtn.css";

const NavBtn = ({ onClick, isOpen }) => {
  const barStyle = {
    backgroundColor: isOpen ? "#022c22" : "#f1f5f9",
  };
  return (
    <button className='menu' onClick={onClick}>
      <span
        className={isOpen ? "bar1 rotate-right" : "bar1"}
        style={barStyle}
      ></span>
      <span className={isOpen ? "bar1 vanish" : "bar2"} style={barStyle}></span>
      <span
        className={isOpen ? "bar1 rotate-left" : "bar3"}
        style={barStyle}
      ></span>
    </button>
  );
};

export default NavBtn;
