import { CommonProps } from "./CommonProps";

export interface ButtonProps extends CommonProps {
  type?: "button" | "submit" | "reset";
  variant?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "icon";
  outline?: boolean;
  size?: "small" | "medium" | "large";
  rounded?: "none" | "small" | "medium" | "large" | "full";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  disabled?: boolean;
}
