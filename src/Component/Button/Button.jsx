import React from "react";
import PropTypes from "prop-types";

const Button = ({ title, className, type, onClick, props }) => {
  return (
    <button className={className} type={type} onClick={onClick} {...props}>
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};
export default Button;
