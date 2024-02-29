---
sidebar_position: 7
---

# Adapter

Design pattern **Adapter** là một Design pattern cấu trúc cho phép các đối tượng với các giao diện không tương thích có thể làm việc cùng nhau. Điều này được thực hiện bằng cách cung cấp một lớp trung gian, gọi là **Adapter**, để dịch giao diện của một đối tượng thành giao diện mà đối tượng khác có thể hiểu.

## Vấn Đề

Hãy tưởng tượng bạn đang tạo một ứng dụng theo dõi thị trường chứng khoán. Ứng dụng này tải dữ liệu chứng khoán từ nhiều nguồn dưới dạng XML và sau đó hiển thị các biểu đồ và sơ đồ đẹp mắt cho người dùng. Tại một thời điểm, bạn quyết định cải thiện ứng dụng bằng cách tích hợp một thư viện phân tích thông minh từ bên thứ ba. Tuy nhiên, thư viện này chỉ hoạt động với dữ liệu dưới dạng JSON.

## Giải Pháp

Bạn có thể tạo một adapter - đây là một đối tượng đặc biệt chuyển đổi giao diện của một đối tượng để đối tượng khác có thể hiểu được. **Adapter** bao bọc một trong các đối tượng để ẩn độ phức tạp của việc chuyển đổi diễn ra đằng sau hậu trường. Đối tượng bị bao bọc thậm chí không nhận thức được sự tồn tại của adapter.

## So Sánh với Các Phương Pháp Clone Khác

Trong khi Design pattern **Prototype** tập trung vào việc tạo bản sao của đối tượng, Design pattern **Adapter** giải quyết một vấn đề khác: cho phép giao tiếp giữa các đối tượng có giao diện không tương thích. Nó không liên quan trực tiếp đến việc sao chép hoặc clone đối tượng, mà là về việc chuyển đổi giao diện.

## Applicability

- Sử dụng **Adapter** khi bạn muốn sử dụng một lớp hiện có, nhưng giao diện của nó không tương thích với phần còn lại của mã nguồn.
- Sử dụng Design pattern khi bạn muốn tái sử dụng một số lớp con hiện có mà không có một số chức năng chung có thể được thêm vào lớp cha.

## Cách Triển Khai

Xác định ít nhất hai lớp với giao diện không tương thích:

Một lớp dịch vụ hữu ích, mà bạn không thể thay đổi.

Một hoặc nhiều lớp client sẽ được lợi từ việc sử dụng lớp dịch vụ.

Khai báo giao diện client và mô tả cách các lớp client giao tiếp với lớp dịch vụ.

Tạo lớp adapter và làm cho nó tuân theo giao diện client. **Adapter** sẽ chứa một tham chiếu đến đối tượng dịch vụ và chịu trách nhiệm chuyển đổi dữ liệu hoặc gọi giữa giao diện client và lớp dịch vụ.

Hãy xem xét một ví dụ cụ thể về việc sử dụng mẫu thiết kế **Adapter** trong Java. Trong ví dụ này, chúng ta có một hệ thống tính toán diện tích cho các hình dạng khác nhau. Hệ thống hiện tại chỉ hỗ trợ tính toán diện tích cho hình tròn thông qua một `interface Circle`, nhưng chúng ta muốn mở rộng hệ thống để hỗ trợ cả hình vuông thông qua một lớp `Square` không tương thích với `interface` hiện tại.

Bước 1: Định nghĩa Interface Cần Được Adapter

```java
// Interface cho hình tròn
public interface Circle {
    double getRadius();
}
```

Bước 2: Định nghĩa Lớp Không Tương Thích

```java
// Lớp hình vuông không tương thích với interface Circle
public class Square {
    private double width;

    public Square(double width) {
        this.width = width;
    }

    public double getWidth() {
        return width;
    }
}
```

Bước 3: Tạo Adapter

```java
// Adapter chuyển đổi Square thành Circle
public class SquareAdapter implements Circle {
    private Square square;

    public SquareAdapter(Square square) {
        this.square = square;
    }

    // Tính bán kính của hình tròn nội tiếp hình vuông
    @Override
    public double getRadius() {
        // Bán kính của hình tròn nội tiếp chính là nửa đường chéo của hình vuông
        return square.getWidth() * Math.sqrt(2) / 2;
    }
}
```

Bước 4: Sử dụng Adapter

```java
public class Main {
    public static void main(String[] args) {
        // Tạo một hình tròn
        Circle circle = () -> 5.0; // Hình tròn với bán kính 5
        System.out.println("Diện tích hình tròn: " + Math.PI * circle.getRadius() * circle.getRadius());

        // Tạo một hình vuông và sử dụng adapter để tính toán diện tích như thể nó là một hình tròn
        Square square = new Square(10.0); // Hình vuông với cạnh 10
        Circle squareAdapter = new SquareAdapter(square);
        System.out.println("Diện tích hình tròn nội tiếp hình vuông: " + Math.PI * squareAdapter.getRadius() * squareAdapter.getRadius());
    }
}
```

Trong ví dụ trên, SquareAdapter làm việc như một trung gian giữa lớp Square và hệ thống hiện có mà chỉ hỗ trợ Circle. Adapter chuyển đổi thông tin từ Square (cụ thể là chiều rộng) thành thông tin mà Circle có thể sử dụng (bán kính), cho phép hệ thống tính toán diện tích cho hình vuông thông qua việc tính diện tích hình tròn nội tiếp hình vuông mà không cần sửa đổi hệ thống hiện tại.

Kết quả là, chúng ta có thể tích hợp và sử dụng lớp Square trong hệ thống mà không cần phải thay đổi hệ thống hoặc lớp Square để chúng trở nên tương thích.

## Ưu và Nhược Điểm

Ưu điểm:

- Nguyên tắc Trách nhiệm Đơn lẻ: Bạn có thể tách biệt mã chuyển đổi giao diện hoặc dữ liệu khỏi logic kinh doanh chính của chương trình.
- Nguyên tắc Mở/Đóng: Bạn có thể giới thiệu các loại adapter mới vào chương trình mà không làm hỏng mã nguồn client hiện có.

Nhược điểm:

- Tổng thể mã nguồn của chương trình tăng lên vì bạn cần phải giới thiệu một loạt các giao diện và lớp mới. Đôi khi việc chỉ thay đổi lớp dịch vụ để nó khớp với phần còn lại của mã nguồn của bạn là một giải pháp đơn giản hơn.

Design pattern **Adapter** cung cấp một giải pháp linh hoạt và mạnh mẽ cho việc tích hợp và làm việc cùng nhau giữa các lớp với giao diện không tương thích, giúp mã nguồn trở nên dễ mở rộng và dễ bảo trì hơn.
