import React from "react";

const Button = ({ title, className, type, onClick, props }) => {
  return (
    <button className={className} type={type} onClick={onClick} {...props}>
      {title}
    </button>
  );
};

export default Button;
