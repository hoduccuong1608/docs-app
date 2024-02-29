import { CommonProps } from "./CommonProps";

export interface ButtonProps extends CommonProps {
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "success" | "danger" | "outline";
  size?: "small" | "medium" | "large";
  leftIcon?: React.ReactNode; // Đổi thành leftIcon
  rightIcon?: React.ReactNode; // Thêm rightIcon
  disabled?: boolean;
}
