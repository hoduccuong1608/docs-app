import React, { useState, useEffect, useRef } from "react";
import { ModalProps } from "../../interface/ModalProps";
import Button from "../Button";

const Modal: React.FC<ModalProps> = ({
  visible,
  setVisible,
  onClose,
  onOk,
  title = "Title",
  children,
  footer, // Không đặt giá trị mặc định tại đây
  className = "",
  style,
  size = "medium",
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const modalStyle = {
    ...style,
    opacity: visible ? 1 : 0,
    transform: visible
      ? "scale(1)"
      : `scale(0) translate(${mousePosition.x}px, ${mousePosition.y}px)`,
    transition: "opacity 5s ease, transform 5s ease",
    transformOrigin: `${mousePosition.x}px ${mousePosition.y}px`,
  };
  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", updateMousePosition);

    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  function handleCloseClick() {
    setVisible(false);
    if (onClose) onClose();
  }

  const defaultFooter = (
    <React.Fragment>
      <hr />
      <Button style={{ marginRight: "10px" }} onClick={handleCloseClick}>
        Close
      </Button>
      <Button variant="primary" onClick={onOk}>
        Ok
      </Button>
    </React.Fragment>
  );

  if (!visible) return null;

  return (
    <div className="lgo-modal-overlay" onClick={handleCloseClick}>
      <section
        className={`lgo-modal-container ${className} lgo-modal-${size}`}
        onClick={(e) => e.stopPropagation()}
        style={modalStyle}>
        <header className="lgo-modal-header">
          <h3 className="lgo-modal-title">{title}</h3>
          <button
            className="lgo-modal-close-button"
            aria-label="Close"
            onClick={handleCloseClick}>
            &times;
          </button>
        </header>
        <hr />
        <main className="lgo-modal-content">{children}</main>
        <hr />
        <footer className="lgo-modal-footer">
          {footer ? footer : defaultFooter}
        </footer>
      </section>
    </div>
  );
};

export default Modal;
