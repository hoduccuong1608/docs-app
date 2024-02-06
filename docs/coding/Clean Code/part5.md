---
sidebar_position: 4
---

# Định dạng code

Chương 5 tập trung vào tầm quan trọng của việc định dạng code một cách hợp lý và nhất quán. Định dạng code không chỉ giúp code trở nên dễ đọc và dễ bảo trì hơn mà còn phản ánh sự chuyên nghiệp của nhóm phát triển. Dưới đây là tóm tắt và ví dụ minh họa về những điểm chính được đề cập trong chương này.

## Mục đích của việc định dạng

Làm cho code rõ ràng hơn, giúp giao tiếp giữa các lập trình viên được hiệu quả hơn.
Chính vì vậy mà trong các dự án của ngày nay, các ae dev leader luôn thêm các thư viện format code bên ngoài vào để đảm bảo việc trong source code dự án chỉ có duy nhất 1 kiểu giúp tạo ra một sản phẩm phần mềm có cấu trúc rõ ràng, dễ đọc và dễ bảo trì.

## Định dạng theo chiều dọc

Phân biệt rõ ràng giữa các phần của code bằng cách sử dụng khoảng trống, giúp cải thiện khả năng đọc và tổ chức thông tin.

```java
public class Example {
    private int count; // Khai báo biến

    public Example() {
        this.count = 0;
    }

    public void increment() {
        count++; // Hàm thực hiện tăng giá trị
    }

    public int getCount() {
        return count; // Hàm trả về giá trị
    }
}
```

Trong ví dụ này, các phần của class (khai báo biến, constructor, và các hàm) được tách biệt rõ ràng bằng khoảng trống, giúp dễ dàng theo dõi và hiểu code.

## Định dạng theo chiều ngang

Giới hạn độ dài của mỗi dòng code để tăng tính rõ ràng và dễ đọc, với khuyến nghị không nên vượt quá 120 ký tự mỗi dòng.

```java
public void doSomething(int parameterOne, int parameterTwo) {
    // Một dòng code không nên quá dài, tránh gây khó đọc
    int result = parameterOne + parameterTwo; // Phép toán đơn giản
    System.out.println("Kết quả: " + result);
}
```

Dòng code trong ví dụ này giữ độ dài vừa phải, với việc sử dụng khoảng trắng để nhấn mạnh các phần tử trong câu lệnh.

## Khoảng cách và mật độ

Sử dụng khoảng trắng để nhấn mạnh mối quan hệ giữa các phần tử trong code.
Lùi đầu dòng giúp làm nổi bật cấu trúc phân cấp của code, từ đó giúp người đọc dễ dàng nhận ra các block logic, vòng lặp, điều kiện, và phân biệt chúng với nhau.

```java
public class IndentationExample {

    public void printNumbers() {
        for (int i = 1; i <= 5; i++) {
            if (i % 2 == 0) {
                System.out.println(i + " là số chẵn");
            } else {
                System.out.println(i + " là số lẻ");
            }
        }
    }

    public static void main(String[] args) {
        IndentationExample example = new IndentationExample();
        example.printNumbers();
    }
}
```

Trong ví dụ này:

- Các hàm `printNumbers` và `main` được lùi vào một cấp so với khai báo class.
- Các câu lệnh trong vòng lặp for và các điều kiện `if-else` được lùi vào thêm một cấp nữa, làm cho cấu trúc phân cấp và luồng logic của chương trình trở nên rõ ràng.

## Lùi đầu dòng

Làm nổi bật cấu trúc phân cấp của code, giúp người đọc dễ dàng theo dõi luồng logic.
Quy tắc trong nhóm: Toàn bộ nhóm phát triển nên thống nhất một bộ quy tắc định dạng và tuân thủ nó để duy trì tính nhất quán trong code.

```java
public class SpacingExample {

    public void calculateSum(int a, int b) {
        int sum = a + b;  // Khoảng trắng quanh toán tử cộng giúp nhấn mạnh phép toán
        System.out.println("Tổng của " + a + " và " + b + " là: " + sum);
    }

    public static void main(String[] args) {
        SpacingExample example = new SpacingExample();
        example.calculateSum(5, 10);
    }
}
```

Trong ví dụ này:

- Khoảng trắng được sử dụng xung quanh toán tử cộng trong phép tính `sum = a + b`, giúp phép toán này nổi bật và dễ nhận biết.
- Khoảng trắng cũng được sử dụng trong lời gọi hàm `System.out.println` để tách các đối số, làm cho câu lệnh trở nên dễ đọc và hiểu hơn.
