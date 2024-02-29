import { ThemeContext } from "../components/ThemeProvider";
import { useContext } from "react";

// Hook để sử dụng context
export const useTheme = () => useContext(ThemeContext);

// Bạn cũng có thể muốn định nghĩa propTypes cho các component khác sử dụng useTheme để kiểm tra
