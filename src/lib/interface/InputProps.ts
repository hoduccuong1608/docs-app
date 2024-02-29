import { CommonProps } from "./CommonProps";

// Định nghĩa một interface mới cho các quy tắc validation (nếu cần)
// Có thể bao gồm các quy tắc cụ thể như required, pattern, custom validation function, etc.
export interface ValidationRule {
  required?: boolean;
  pattern?: RegExp;
  validation?: (value: string | string[]) => boolean | Promise<boolean>;
  message?: string; // Tin nhắn lỗi tùy chỉnh khi validation thất bại
}

export interface InputProps extends CommonProps {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: number | string;
  objectValue?: object;
  rule?: ValidationRule; // Sử dụng interface ValidationRule cho prop `rule`
  placeholder?: string;
  maxLength?: number | string;
  minLength?: number | string;
  maxValue?: number | string;
  minValue?: number | string;
}
