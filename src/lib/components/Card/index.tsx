import React from "react";
import { CardProps } from "../../interface/CardProps";

const Card: React.FC<CardProps> = ({
  id,
  className = "",
  style,
  size = "medium",
  rounded = "none",
  close,
  title = "Title",
  onClick,
  children,
}) => {
  return (
    <div
      id={id}
      className={`lgo-card lgo-card-${size} lgo-rounded-${rounded} ${className}`}
      style={style}
      onClick={onClick}>
      {close && (
        <button className="lgo-card-close-button" aria-label="Close card">
          X
        </button>
      )}
      {title && <div className="lgo-card-title">{title}</div>}
      <div className="lgo-card-content">{children}</div>
    </div>
  );
};

export default Card;
