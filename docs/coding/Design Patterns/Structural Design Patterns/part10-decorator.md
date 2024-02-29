---
sidebar_position: 10
---

# Decorator

## Ý Định

Design pattern Decorator cho phép bạn gắn thêm các hành vi mới cho đối tượng bằng cách đặt những đối tượng này bên trong các đối tượng bao bọc đặc biệt chứa các hành vi đó. Mẫu này hữu ích cho việc mở rộng hành vi của các đối tượng một cách linh hoạt và động, mà không cần sửa đổi mã nguồn của chúng.

## Cấu Trúc

- Component: Giao diện hoặc lớp cơ bản định nghĩa các phương thức chung cho cả đối tượng cụ thể và decorator.
- ConcreteComponent: Lớp cụ thể định nghĩa đối tượng cần được bổ sung thêm hành vi.
- Decorator: Lớp trừu tượng chứa một tham chiếu đến một đối tượng Component và cũng triển khai giao diện của Component.
- ConcreteDecorator: Cung cấp cách triển khai cụ thể cho việc bổ sung hành vi cho Component.

## Cách Áp Dụng

Đảm bảo rằng ứng dụng của bạn có thể biểu diễn dưới dạng một hoặc nhiều component với các hành vi có thể mở rộng.

Xác định các hành vi có thể mở rộng đó và tách chúng ra khỏi lớp chính để tạo thành các decorator riêng biệt.

**Ví Dụ: Hệ Thống Thông Báo Linh Hoạt**

Giả sử bạn đang xây dựng một hệ thống thông báo cho phép gửi thông báo qua nhiều kênh như email, SMS và thông báo qua ứng dụng.

Component:

```java
interface Notifier {
    void send(String message);
}
```

ConcreteComponent:

```java
class EmailNotifier implements Notifier {
    @Override
    public void send(String message) {
        System.out.println("Sending email: " + message);
    }
}
```

Decorator:

```java
class NotifierDecorator implements Notifier {
    private Notifier wrappee;

    NotifierDecorator(Notifier notifier) {
        this.wrappee = notifier;
    }

    @Override
    public void send(String message) {
        wrappee.send(message);
    }
}
```

ConcreteDecorator:

```java
class SMSNotifierDecorator extends NotifierDecorator {
    SMSNotifierDecorator(Notifier notifier) {
        super(notifier);
    }

    @Override
    public void send(String message) {
        super.send(message);
        // Thêm hành vi gửi SMS ở đây
        System.out.println("Sending SMS: " + message);
    }
}
```

Sử Dụng:

```java
public class NotificationService {
    public static void main(String[] args) {
        Notifier notifier = new EmailNotifier();
        notifier = new SMSNotifierDecorator(notifier);

        notifier.send("Hello World!");
    }
}
```

Trong ví dụ này, EmailNotifier là một ConcreteComponent cung cấp chức năng gửi email cơ bản. SMSNotifierDecorator là một ConcreteDecorator mở rộng hành vi của Notifier bằng cách thêm khả năng gửi SMS. Nhờ vào Decorator, bạn có thể dễ dàng mở rộng hệ thống để hỗ trợ thêm các kênh thông báo khác như Facebook, Slack mà không cần sửa đổi mã nguồn hiện có.

### Ưu và Nhược Điểm

Ưu Điểm:

- Tăng cường tính linh hoạt và tái sử dụng của đối tượng.
- Cho phép thêm hành vi cho đối tượng một cách động, không cần sửa đổi mã nguồn hiện có.

Nhược Điểm:

- Có thể dẫn đến một hệ thống với rất nhiều lớp nhỏ, làm cho code khó theo dõi hơn.
- Sự phức tạp tăng lên khi cần áp dụng nhiều lớp decorator.

Design pattern Decorator cung cấp một giải pháp mạnh mẽ cho việc mở rộng hành vi của đối tượng mà không cần sửa đổi mã nguồn, giúp giữ cho mã nguồn gọn gàng và dễ bảo trì.
