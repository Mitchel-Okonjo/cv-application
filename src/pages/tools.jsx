import { useState } from "react";
import Icon from "@mdi/react";
import { mdiChevronRight, mdiChevronLeft } from "@mdi/js";

const Input = ({
  label,
  type,
  id = "",
  placeholder,
  comment = "",
  className = "",
  handleChange,
  value,
}) => {
  return (
    <label htmlFor={id}>
      {label}
      {comment && <span className='opt-rec'>{`*${comment}`}</span>}
      <input
        className={className}
        type={type}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </label>
  );
};

const TextArea = ({
  label,
  id,
  rows,
  cols,
  placeholder,
  comment = "",
  handleChange,
  value,
}) => {
  return (
    <label htmlFor={id}>
      {label}
      {comment && <span className='opt-rec'>{`*${comment}`}</span>}
      <textarea
        value={value}
        id={id}
        rows={rows}
        cols={cols}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </label>
  );
};

const PageButton = ({
  className,
  type = "",
  onClick,
  pageNav = "",
  visibility,
  flag,
  color = "",
  size = "",
  bgColor = "",
}) => {
  const buttonStyle = {
    display: visibility,
    color: color,
    backgroundColor: bgColor,
  };
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      style={buttonStyle}
    >
      {pageNav != "" && pageNav != "Back" ? pageNav : ""}
      <Icon
        path={flag === "b" ? mdiChevronLeft : mdiChevronRight}
        size={size ? size : 1}
        color={color}
        title={pageNav}
      />
      {pageNav != "" && pageNav === "Back" ? pageNav : ""}
    </button>
  );
};

const NormalButton = ({
  className,
  type,
  id,
  content = "",
  visibility = "",
  color = "",
  colorHover = "",
  bgColor = "",
  bgColorHover = "",
  onClick,
  pathHover = "",
  path = "",
  size = "",
  title,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const buttonStyle = {
    display: visibility,
    color: isHovered ? colorHover : color,
    backgroundColor: isHovered ? bgColorHover : bgColor,
    cursor: isHovered && "pointer",
    border: "none",
    alignItems: "center",
  };
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      style={buttonStyle}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      id={id}
    >
      {content}
      {path && (
        <Icon
          path={isHovered ? pathHover : path}
          size={size ? size : 1.5}
          color={isHovered ? colorHover : color}
          title={title}
        />
      )}
    </button>
  );
};
export { Input, TextArea, PageButton, NormalButton };
