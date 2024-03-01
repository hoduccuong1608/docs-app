import React from "react";
import { ButtonProps } from "../../interface/ButtonProps";

const Button: React.FC<ButtonProps> = ({
  type = "button",
  variant = "primary",
  size = "medium",
  rounded = "medium",
  outline,
  className = "",
  style,
  onClick,
  disabled,
  children,
  leftIcon, // Sử dụng leftIcon
  rightIcon, // Sử dụng rightIcon
}) => {
  const classNameFinal = `lgo-btn lgo-btn-${variant} ${
    size ? `lgo-btn-${size}` : ""
  } ${rounded ? `lgo-rounded-${rounded}` : ""} ${
    outline ? `lgo-btn-outline` : ""
  } ${className} ${disabled ? "disabled" : ""}`;

  return (
    <button
      type={type}
      className={classNameFinal}
      style={style}
      onClick={onClick}
      disabled={disabled}>
      {leftIcon && <>{leftIcon}</>}
      {children}
      {rightIcon && <>{rightIcon}</>}
    </button>
  );
};

export default Button;
