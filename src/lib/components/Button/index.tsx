import React from "react";
import PropTypes from "prop-types";
import "./button.scss";

const Button = ({
  type,
  variant,
  style,
  className,
  onClick,
  content,
  disabled,
  size,
}) => {
  const classNameFinal = `${className} lgo-btn lgo-btn-${variant} lgo-btn-${size} ${
    disabled ? "disabled" : ""
  }`;
  return (
    <button
      type={type}
      style={style}
      className={classNameFinal}
      onClick={onClick}>
      {content}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "outline",
  ]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  style: PropTypes.object,
  className: PropTypes.string,
  onClick: PropTypes.func,
  content: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  type: "button", // 'submit', 'reset', cũng có thể sử dụng
  variant: "primary",
  style: {},
  className: "",
  onClick: () => {},
  content: "Button",
  disabled: false,
};

export default Button;
