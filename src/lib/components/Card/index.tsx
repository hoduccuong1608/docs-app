import React from "react";
import { CardProps } from "../../interface/CardProps";

const Card: React.FC<CardProps> = ({
  id,
  className = "",
  style,
  size = "medium",
  rounded = "none",
  close,
  onClose,
  image,
  title = "Title",
  footer,
  children,
}) => {
  const handleCloseClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose?.();
  };

  const componentClose = () => {
    return (
      close && (
        <button
          className="lgo-card-button-close"
          aria-label="Close card"
          onClick={handleCloseClick}>
          &times;
        </button>
      )
    );
  };

  return (
    <section
      id={id}
      className={`lgo-card lgo-card-${size} lgo-rounded-${rounded} ${className}`}
      style={style}>
      <header className="lgo-card-header">
        {image && <img src={image} className="lgo-card-image" />}
        {title && <h3 className="lgo-card-title">{title}</h3>}
      </header>
      <hr />
      <div className="lgo-card-content">{children}</div>
      {footer && (
        <>
          <hr /> <footer className="lgo-card-footer">{footer}</footer>
        </>
      )}
    </section>
  );
};

export default Card;
