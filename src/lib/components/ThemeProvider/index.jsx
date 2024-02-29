import React, { createContext, useState, PropTypes } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Sử dụng useState để khởi tạo theme từ giá trị lưu trữ hoặc mặc định là 'light'
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    // Lưu giá trị theme hiện tại vào localStorage mỗi khi theme thay đổi
    localStorage.setItem("theme", theme);

    // Cập nhật thuộc tính data-theme trên thẻ <html>
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]); // Chỉ re-run effect này khi theme thay đổi

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Định nghĩa kiểu dữ liệu cho props
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired, // children phải là một node và là required
};
