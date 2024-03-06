import React from "react";
import { CommonProps } from "./CommonProps";

export interface ModalProps extends CommonProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  onClose?: () => void;
  onOk?: () => void;
  title?: string | React.ReactNode;
  footer?: React.ReactNode;
}
