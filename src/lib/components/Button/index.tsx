import React from "react";
import { ButtonProps } from "../../interface/ButtonProps";

const Button: React.FC<ButtonProps> = ({
  type = "button",
  variant = "primary",
  size = "medium",
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
  } ${className} ${disabled ? "disabled" : ""}`;

  return (
    <button
      type={type}
      className={classNameFinal}
      style={style}
      onClick={onClick}
      disabled={disabled}>
      {leftIcon && <span className="lgo-btn-icon left">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="lgo-btn-icon right">{rightIcon}</span>}
    </button>
  );
};

export default Button;
