---
sidebar_position: 1
---

# Tổng quan

Quyển sách **"Clean Code: A Handbook of Agile Software Craftsmanship"** của Robert C. Martin (còn được biết đến là Uncle Bob) là một nguồn tài liệu quan trọng dành cho các lập trình viên muốn nâng cao kỹ năng viết mã của mình. Sách cung cấp các nguyên tắc, kỹ thuật, và best practices để viết code sạch - code dễ đọc, dễ bảo trì và dễ mở rộng. Dưới đây là tóm tắt của mình về chương 1 & 2

## Ý nghĩa của Clean Code

Code sạch không chỉ là viết mã mà còn là một nghệ thuật và sự tự giác của lập trình viên. Code sạch giúp dự án dễ dàng quản lý và phát triển, giảm thiểu bug và tăng hiệu suất làm việc của nhóm.

## Tên biến, hàm và lớp có ý nghĩa

Chọn tên biến, hàm và lớp sao cho chúng thể hiện rõ ràng mục đích sử dụng, giúp người đọc code dễ dàng hiểu được logic mà không cần phải đọc chi tiết mã nguồn.

- Biến: `int elapsedTimeInDays;` thay vì `int e;`
- Hàm: `calculateInterest();` thay vì `calc();`
- Lớp: `CustomerAccount;` thay vì `CustAcc;`

## Chức năng duy nhất

Mỗi hàm hoặc phương thức nên giữ một chức năng duy nhất, giúp mã nguồn dễ dàng quản lý, bảo trì và mở rộng.

- Hàm `calculateTotalSum();` chỉ nên tính tổng, không nên in kết quả ra màn hình hoặc lưu vào cơ sở dữ liệu.

## Mã nguồn sạch sẽ và tổ chức tốt

Sắp xếp mã nguồn một cách logic và sạch sẽ, sử dụng khoảng trắng và định dạng phù hợp để tăng khả năng đọc và hiểu mã.

## Tránh mã dư thừa

Loại bỏ code không sử dụng, bình luận lỗi thời, và mã dư thừa giúp giảm kích thước và phức tạp của dự án.

## Xử lý lỗi

Xử lý lỗi một cách rõ ràng và chính xác, tránh để lỗi ảnh hưởng đến logic chính của chương trình.
Thay vì trả về giá trị null khi gặp lỗi, hãy ném một ngoại lệ cụ thể để rõ ràng về vấn đề đã xảy ra.

```java
if (file == null) {
  throw new FileNotFoundException("Configuration file not found");
}
```

## Viết Unit Tests

Viết test cases để kiểm tra từng phần nhỏ của mã nguồn, giúp phát hiện và sửa lỗi sớm.

Đối với một hàm `add(int a, int b)`, viết test case kiểm tra việc cộng hai số nguyên, bao gồm cả trường hợp biên như cộng với 0 hoặc số âm.

## Refactoring

Thường xuyên cải tiến và tối ưu mã nguồn thông qua quá trình refactoring, giúp mã nguồn dễ quản lý và mở rộng hơn.

Tóm lại, "Clean Code" không chỉ là hướng dẫn cách viết code sạch mà còn là một lời nhắc nhở về tầm quan trọng của việc viết mã một cách có trách nhiệm và chuyên nghiệp. Quyển sách khuyến khích lập trình viên không ngừng học hỏi, cải thiện kỹ năng và thực hành để trở thành những nghệ nhân phần mềm.
