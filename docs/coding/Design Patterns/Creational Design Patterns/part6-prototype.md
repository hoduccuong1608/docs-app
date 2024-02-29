---
sidebar_position: 6
---

# Prototype

Design pattern **Prototype**: Sao Chép Đối Tượng Mà Không Phụ Thuộc Vào Lớp Của Chúng

Design pattern **Prototype** cho phép bạn sao chép các đối tượng hiện có mà không làm mã nguồn của bạn phụ thuộc vào các lớp của những đối tượng đó.

## Vấn Đề

Giả sử bạn có một đối tượng và bạn muốn tạo một bản sao chính xác của nó. Bạn phải làm thế nào? Đầu tiên, bạn cần tạo một đối tượng mới cùng lớp. Sau đó, bạn phải truy cập và sao chép tất cả giá trị của các trường từ đối tượng gốc sang đối tượng mới.

Cách tiếp cận trực tiếp này có một hạn chế: không phải tất cả các đối tượng đều có thể được sao chép theo cách này vì một số trường của đối tượng có thể là private và không thể truy cập từ bên ngoài chính đối tượng đó.

## Giải Pháp

Design pattern **Prototype** giao việc sao chép cho chính các đối tượng đang được sao chép. Design pattern này khai báo một interface chung cho tất cả các đối tượng hỗ trợ việc sao chép. Interface này cho phép bạn sao chép một đối tượng mà không gắn kết mã nguồn của bạn với lớp của đối tượng đó. Thông thường, interface này chỉ chứa một phương thức sao chép duy nhất.

## Cấu Trúc

- Prototype Interface: Khai báo các phương thức sao chép. Trong hầu hết các trường hợp, nó là một phương thức clone duy nhất.
- Concrete Prototype: Lớp cụ thể triển khai phương thức sao chép. Ngoài sao chép dữ liệu của đối tượng gốc sang bản sao, phương thức này cũng có thể xử lý một số trường hợp đặc biệt của quá trình sao chép liên quan đến việc sao chép các đối tượng liên kết, giải quyết các phụ thuộc đệ quy, v.v.
- Client: Có thể tạo ra bản sao của bất kỳ đối tượng nào tuân theo `interface` prototype.

Giả sử chúng ta cần sao chép các đối tượng hình học, mà không gắn kết mã nguồn với các lớp cụ thể của chúng.

```java
// Base prototype.
abstract class Shape {
    int X, Y;
    String color;

    Shape() {}

    // The prototype constructor. A fresh object is initialized
    // with values from the existing object.
    Shape(Shape source) {
        this();
        this.X = source.X;
        this.Y = source.Y;
        this.color = source.color;
    }

    abstract Shape clone();
}

class Rectangle extends Shape {
    int width, height;

    Rectangle(Rectangle source) {
        super(source);
        this.width = source.width;
        this.height = source.height;
    }

    @Override
    Shape clone() {
        return new Rectangle(this);
    }
}

class Circle extends Shape {
    int radius;

    Circle(Circle source) {
        super(source);
        this.radius = source.radius;
    }

    @Override
    Shape clone() {
        return new Circle(this);
    }
}

// Client code
class Application {
    ArrayList<Shape> shapes = new ArrayList<>();

    void addShape(Shape shape) {
        shapes.add(shape.clone());
    }
}
```

## Khả Năng Áp Dụng

Sử dụng Prototype khi mã của bạn không nên phụ thuộc vào các lớp cụ thể của đối tượng mà bạn cần sao chép.
Khi bạn muốn giảm số lượng lớp con chỉ khác nhau về cách họ khởi tạo các đối tượng của mình.

## Ưu và Nhược Điểm

Ưu điểm:

- Bạn có thể sao chép đối tượng mà không cần làm mã nguồn phụ thuộc vào lớp của chúng.
- Bạn có thể loại bỏ mã khởi tạo lặp lại bằng cách sao chép các prototype đã được cấu hình sẵn.
- Bạn có thể dễ dàng tạo ra các đối tượng phức tạp hơn.
- Bạn có được một lựa chọn thay thế cho kế thừa khi đối phó với cấu hình cố định cho các đối tượng phức tạp.

Nhược điểm:

- Sao chép các đối tượng phức tạp có tham chiếu vòng có thể rất phức tạp.

## Mối Quan Hệ với Các Design Pattern khác

**Prototype** có thể giúp khi bạn cần lưu trữ các bản sao của lệnh (Commands) vào lịch sử.
Khi sử dụng cùng với **Composite** và **Decorator**, **Prototype** cho phép bạn sao chép các cấu trúc phức tạp thay vì xây dựng lại chúng từ đầu.

**Prototype** không dựa trên kế thừa, do đó không có nhược điểm của nó. Tuy nhiên, nó yêu cầu khởi tạo phức tạp của đối tượng sao chép. **Factory Method** dựa trên kế thừa nhưng không yêu cầu bước khởi tạo.

Design pattern **Prototype** cung cấp một giải pháp linh hoạt cho việc sao chép đối tượng, giúp mã nguồn trở nên linh hoạt và dễ bảo trì hơn khi làm việc với các đối tượng phức tạp.
