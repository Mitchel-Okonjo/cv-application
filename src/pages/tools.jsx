import { useState } from "react";
import Icon from "@mdi/react";
import { mdiChevronRight, mdiChevronLeft } from "@mdi/js";

const Input = ({
  label,
  type,
  id,
  placeholder,
  comment = "",
  className = "",
}) => {
  const [value, setValue] = useState("");

  const handleChange = (value) => {
    setValue(value);
  };

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
        onChange={(event) => handleChange(event.target.value)}
      />
    </label>
  );
};

const TextArea = ({ label, id, rows, cols, placeholder, comment = "" }) => {
  const [value, setValue] = useState("");

  const handleChange = (value) => {
    setValue(value);
  };

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
        onChange={(event) => handleChange(event.target.value)}
      />
    </label>
  );
};

const Button = ({
  className,
  type = "",
  onClick,
  pageNav = "",
  visibility,
}) => {
  const buttonStyle = {
    display: visibility,
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
        path={pageNav === "Back" ? mdiChevronLeft : mdiChevronRight}
        size={1.5}
        color='#022c22'
        title={pageNav}
      />
      {pageNav != "" && pageNav === "Back" ? pageNav : ""}
    </button>
  );
};
export { Input, TextArea, Button };
