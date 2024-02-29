---
sidebar_position: 8
---

# Bridge

Design pattern **Bridge** là một Design pattern cấu trúc cho phép bạn tách một lớp lớn hoặc một tập hợp các lớp có mối quan hệ chặt chẽ thành hai hệ thống phân cấp riêng biệt — trừu tượng (abstraction) và thực thi (implementation)—mà có thể được phát triển độc lập với nhau.

## Ý Định

Mẫu thiết kế Bridge nhằm mục đích tách biệt một `abstration` từ `implementation` của nó để hai bên có thể thay đổi độc lập mà không ảnh hưởng lẫn nhau. Nói cách khác, **Bridge** giúp tách rời các khía cạnh cấu trúc của một chương trình khỏi các chi tiết cụ thể của cách thức thực thi, cho phép chúng ta thay đổi cấu trúc và thực thi của chương trình một cách độc lập.

## Vấn Đề

Hãy tưởng tượng bạn có một lớp hình dạng hình học (`Shape`) với một cặp lớp con là `Circle` và `Square`. Bạn muốn mở rộng hệ thống phân cấp lớp này để bao gồm màu sắc, vì vậy bạn lên kế hoạch tạo các lớp con màu như `Red` và `Blue` cho mỗi hình dạng. Tuy nhiên, vì bạn đã có hai lớp con, bạn sẽ cần tạo bốn kết hợp lớp như `BlueCircle` và `RedSquare`.

Thêm các loại hình dạng và màu sắc vào hệ thống phân cấp sẽ làm cho nó tăng lên một cách mũ. Ví dụ, để thêm một hình dạng tam giác, bạn cần giới thiệu hai lớp con, mỗi lớp cho mỗi màu. Và sau đó, việc thêm một màu mới sẽ yêu cầu tạo thêm ba lớp con, mỗi lớp cho mỗi loại hình dạng. Càng đi xa, vấn đề càng trở nên tồi tệ.

## Giải Pháp

Design pattern **Bridge** cố gắng giải quyết vấn đề này bằng cách chuyển từ kế thừa sang kết hợp đối tượng. Điều này có nghĩa là bạn trích xuất một trong các chiều vào một hệ thống phân cấp lớp riêng biệt, để các lớp gốc sẽ tham chiếu đến một đối tượng của hệ thống phân cấp mới, thay vì có tất cả trạng thái và hành vi của nó trong một lớp.

Theo cách tiếp cận này, chúng ta có thể trích xuất mã liên quan đến màu sắc vào lớp của riêng nó với hai lớp con là Red và Blue. Lớp Shape sau đó nhận một trường tham chiếu chỉ đến một trong các đối tượng màu sắc. Bây giờ, hình dạng có thể ủy quyền bất kỳ công việc liên quan đến màu sắc nào cho đối tượng màu sắc được liên kết. Tham chiếu đó sẽ hoạt động như một cây cầu giữa lớp Shape và Color. Từ bây giờ, việc thêm màu mới sẽ không yêu cầu thay đổi hệ thống phân cấp hình dạng, và ngược lại.

## Cấu Trúc

- Abstraction: Định nghĩa interface abstraction ở mức độ cao. Chứa một tham chiếu đến đối tượng của Implementor.
- RefinedAbstraction: Cung cấp các biến thể của logic control mà dựa trên abstraction.
- Implementor: Định nghĩa interface cho các lớp implementation.
- ConcreteImplementor: Cung cấp các triển khai cụ thể cho interface của Implementor.

## Ví Dụ Coding

Để minh họa mẫu thiết kế Bridge, chúng ta có thể xem xét một ví dụ đơn giản với các lớp Shape và Color như đã đề cập:

```java
// Implementor
interface Color {
    String fill();
}

// Concrete Implementor A
class Red implements Color {
    public String fill() {
        return "Color is Red";
    }
}

// Concrete Implementor B
class Blue implements Color {
    public String fill() {
        return "Color is Blue";
    }
}

// Abstraction
abstract class Shape {
    protected Color color;

    public Shape(Color color) {
        this.color = color;
    }

    abstract public String draw();
}

// Refined Abstraction
class Circle extends Shape {
    public Circle(Color color) {
        super(color);
    }

    public String draw() {
        return "Circle drawn with " + color.fill();
    }
}

// Refined Abstraction
class Square extends Shape {
    public Square(Color color) {
        super(color);
    }

    public String draw() {
        return "Square drawn with " + color.fill();
    }
}

// Client code
public class BridgeDemo {
    public static void main(String[] args) {
        Shape redCircle = new Circle(new Red());
        Shape blueSquare = new Square(new Blue());

        System.out.println(redCircle.draw());
        System.out.println(blueSquare.draw());
    }
}
```

Trong ví dụ này, `Color` là `Implementor` (thực thi) và `Shape` là `Abstraction` (trừu tượng). Chúng ta có hai `Concrete Implementor` là `Red` và `Blue`, và hai `Refined Abstraction` là `Circle` và `Square`. Mỗi hình dạng được vẽ với một màu sắc cụ thể mà không cần định nghĩa lại logic vẽ cho mỗi kết hợp màu sắc và hình dạng, nhờ sử dụng cấu trúc Bridge.

## Ưu điểm

- Tính linh hoạt cao: Cho phép thay đổi cả abstraction và implementation độc lập với nhau.
- Mở rộng dễ dàng: Thêm abstraction hoặc implementation mới mà không ảnh hưởng đến phần còn lại của hệ thống.
- Tách biệt logic và cài đặt: Giúp mã nguồn dễ đọc và bảo trì hơn.

## Khi Nào Sử Dụng

Khi bạn muốn tránh sự ràng buộc chặt chẽ giữa abstraction của một chức năng và implementation của nó.

Khi bạn muốn chia hệ thống phân cấp lớp thành phần cấu trúc và phần thực thi để chúng có thể phát triển độc lập.

Khi bạn muốn thay đổi implementation tại runtime.
