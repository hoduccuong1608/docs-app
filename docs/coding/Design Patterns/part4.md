---
sidebar_position: 4
---

# Abstract Factory

**Abstract Factory** là một mẫu thiết kế sáng tạo (Creational Design Pattern) cung cấp một interface để tạo ra các "gia đình" của các đối tượng liên quan hoặc phụ thuộc mà không cần chỉ định các lớp cụ thể của chúng. Mẫu thiết kế này được sử dụng khi hệ thống cần được độc lập với cách mà các đối tượng được tạo ra, tổ chức và biểu diễn.

## Mục đích

Mục đích của **Abstract Factory** là tạo ra một interface cho việc tạo ra một tập hợp các đối tượng liên quan mà không cần phải xác định các lớp cụ thể của chúng. Điều này giúp cho mã nguồn trở nên linh hoạt hơn trong việc làm việc với các gia đình đối tượng khác nhau.

## Vấn Đề

Giả sử bạn đang phát triển một ứng dụng và muốn nó hỗ trợ nhiều theme khác nhau, mỗi theme bao gồm một tập hợp các đối tượng giao diện người dùng như `Buttons`, `Textboxes`, và `Checkboxes`. Mỗi theme (ví dụ: `Dark Mode` và `Light Mode`) sẽ có cách thể hiện riêng cho các đối tượng này. Việc tạo ra các đối tượng giao diện người dùng phù hợp với theme đang được chọn mà không làm cứng nhắc mã nguồn là một thách thức.

## Giải Pháp

**Abstract Factory** giải quyết vấn đề này bằng cách định nghĩa một interface (**AbstractFactory**) cho việc tạo ra các đối tượng của các gia đình sản phẩm khác nhau. Các lớp cụ thể (**ConcreteFactory**) thực hiện interface này tạo ra các đối tượng cụ thể của gia đình sản phẩm.

## Cấu Trúc

- **AbstractFactory**: Interface khai báo một tập hợp các phương thức tạo ra các đối tượng sản phẩm khác nhau.
- **ConcreteFactory**: Triển khai các phương thức của **AbstractFactory** để tạo ra các đối tượng sản phẩm cụ thể.
- **AbstractProduct**: Khai báo một interface cho một loại sản phẩm.
- **ConcreteProduct**: Triển khai interface **AbstractProduct**, định nghĩa một sản phẩm cụ thể để được tạo bởi **ConcreteFactory** tương ứng.
- Client: Sử dụng interface của **AbstractFactory** và **AbstractProduct** để tạo ra các đối tượng sản phẩm.
  Ví Dụ Thực Tế

```java
// AbstractFactory
interface GUIFactory {
    Button createButton();
    Checkbox createCheckbox();
}

// ConcreteFactory
class WinFactory implements GUIFactory {
    public Button createButton() {
        return new WinButton();
    }
    public Checkbox createCheckbox() {
        return new WinCheckbox();
    }
}

class MacFactory implements GUIFactory {
    public Button createButton() {
        return new MacButton();
    }
    public Checkbox createCheckbox() {
        return new MacCheckbox();
    }
}

// AbstractProduct
interface Button {
    void paint();
}

interface Checkbox {
    void paint();
}

// ConcreteProduct
class WinButton implements Button {
    public void paint() {
        System.out.println("Render a button in Windows style");
    }
}

class MacButton implements Button {
    public void paint() {
        System.out.println("Render a button in macOS style");
    }
}

class WinCheckbox implements Checkbox {
    public void paint() {
        System.out.println("Render a checkbox in Windows style");
    }
}

class MacCheckbox implements Checkbox {
    public void paint() {
        System.out.println("Render a checkbox in macOS style");
    }
}

// Client code
public class Application {
    private Button button;
    private Checkbox checkbox;

    public Application(GUIFactory factory) {
        button = factory.createButton();
        checkbox = factory.createCheckbox();
    }

    public void paint() {
        button.paint();
        checkbox.paint();
    }
}
```

Trong ví dụ này, `GUIFactory` là `AbstractFactory` và `WinFactory` & `MacFactory` là `ConcreteFactory`. `Button` và `Checkbox` là `AbstractProduct`, và các lớp như `WinButton`, `MacButton`, `WinCheckbox`, `MacCheckbox` là `ConcreteProduct`. `Application` là `Client` sử dụng các factory để tạo đối tượng mà không biết lớp cụ thể của chúng.

## Khả Năng Áp Dụng

Sử dụng **Abstract Factory** khi mã của bạn cần làm việc với các gia đình sản phẩm liên quan, nhưng bạn không muốn mã phụ thuộc vào các lớp cụ thể của những sản phẩm đó - chúng có thể chưa được biết trước hoặc bạn chỉ đơn giản muốn cho phép mở rộng trong tương lai.

**Abstract Factory** cung cấp cho bạn một interface để tạo đối tượng từ mỗi lớp của gia đình sản phẩm. Miễn là mã của bạn tạo đối tượng thông qua interface này, bạn không cần lo lắng về việc tạo sai biến thể của một sản phẩm không phù hợp với những sản phẩm đã được tạo bởi ứng dụng của bạn.

Xem xét việc triển khai **Abstract Factory** khi bạn có một lớp với một tập hợp các Phương thức Factory làm mờ đi trách nhiệm chính của nó.

Trong một chương trình được thiết kế tốt, mỗi lớp chỉ chịu trách nhiệm cho một việc. Khi một lớp xử lý nhiều loại sản phẩm, có thể đáng giá để trích xuất các phương thức factory của nó vào một lớp factory độc lập hoặc triển khai **Abstract Factory** đầy đủ.

## Cách Triển Khai

- Xác định ma trận của các loại sản phẩm khác biệt so với các biến thể của sản phẩm này.
- Khai báo các interface sản phẩm trừu tượng cho tất cả các loại sản phẩm. Sau đó, làm cho tất cả các lớp sản phẩm cụ thể triển khai các interface này.
- Khai báo interface factory trừu tượng với một tập hợp các phương thức tạo ra cho tất cả các sản phẩm trừu tượng.
- Triển khai một tập hợp các lớp factory cụ thể, mỗi cái cho một biến thể sản phẩm.
- Tạo mã khởi tạo factory ở đâu đó trong ứng dụng. Nó nên tạo một instance của lớp factory cụ thể, tùy thuộc vào cấu hình ứng dụng hoặc môi trường hiện tại. Chuyển đối tượng factory này cho tất cả các lớp tạo sản phẩm.
- Quét qua mã và tìm tất cả các lời gọi trực tiếp đến các constructor sản phẩm. Thay thế chúng bằng các lời gọi đến phương thức tạo phù hợp trên đối tượng factory.

## Ưu và Nhược Điểm

### Ưu điểm:

- Bạn có thể chắc chắn rằng các sản phẩm bạn nhận từ factory tương thích với nhau.
- Tránh sự kết dính chặt chẽ giữa các sản phẩm cụ thể và mã khách hàng.
- Tuân thủ nguyên tắc Single Responsibility. Bạn có thể trích xuất mã tạo sản phẩm vào một nơi, làm cho mã dễ hỗ trợ hơn.
- Tuân thủ nguyên tắc Open/Closed. Bạn có thể giới thiệu các biến thể sản phẩm mới mà không làm vỡ mã khách hàng hiện có.

### Nhược điểm:

- Mã có thể trở nên phức tạp hơn nên có, vì nhiều interface và lớp mới được giới thiệu cùng với mẫu.

## Mối Quan Hệ với Các Design pattern Khác

- Nhiều thiết kế bắt đầu bằng cách sử dụng Factory Method (ít phức tạp và có thể tùy chỉnh qua các lớp con) và phát triển theo hướng Abstract Factory, Prototype, hoặc Builder (linh hoạt hơn nhưng phức tạp hơn).
- Builder tập trung vào việc xây dựng các đối tượng phức tạp từng bước một. Abstract Factory chuyên về việc tạo ra các gia đình sản phẩm liên quan. Abstract Factory trả về sản phẩm ngay lập tức, trong khi Builder cho phép bạn chạy một số bước xây dựng bổ sung trước khi lấy sản phẩm.
- Các lớp **Abstract Factory** thường dựa trên một tập hợp các Phương thức Factory, nhưng bạn cũng có thể sử dụng Prototype để soạn các phương thức trên các lớp này.
  **Abstract Factory** có thể phục vụ như một lựa chọn thay thế cho Facade khi bạn chỉ muốn ẩn cách các đối tượng của hệ thống con được tạo ra từ mã khách hàng.
- Bạn có thể sử dụng **Abstract Factory** cùng với Bridge. Kết hợp này hữu ích khi một số trừu tượng do Bridge định nghĩa chỉ có thể làm việc với một số triển khai cụ thể.

## Kết Luận

**Abstract Factory** cung cấp một cách tiếp cận hiệu quả để tạo ra các gia đình sản phẩm liên quan mà không cần xác định lớp cụ thể của chúng trước, giúp mã nguồn dễ mở rộng và bảo trì hơn.
