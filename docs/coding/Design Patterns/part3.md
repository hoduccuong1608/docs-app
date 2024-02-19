---
sidebar_position: 3
---

# Factory Method

**Factory Method** là một trong những mẫu thiết kế thuộc nhóm Creational Design Patterns, được sử dụng để giải quyết vấn đề tạo đối tượng trong lập trình hướng đối tượng mà không cần chỉ định chính xác lớp của đối tượng sẽ được tạo ra. Mẫu thiết kế này tạo ra một interface cho việc tạo đối tượng, nhưng cho phép các lớp con quyết định lớp nào sẽ được khởi tạo. **Factory Method** trì hoãn việc khởi tạo đối tượng sang lớp con.

## Mục đích

**Factory Method** được thiết kế để giải quyết vấn đề khi bạn không biết trước đối tượng cụ thể nào sẽ được tạo. Thay vì tạo đối tượng trực tiếp bằng cách gọi constructor (sử dụng từ khóa new), bạn gọi một phương thức factory đặc biệt. Đối tượng vẫn được tạo ra bằng từ khóa new, nhưng gọi từ trong phương thức factory. Đối tượng trả về bởi phương thức factory thường được gọi là "sản phẩm".

Điều này giúp:

- Tách rời quá trình tạo đối tượng khỏi mã nguồn sử dụng đối tượng: Điều này giúp tăng tính module hóa của mã, làm cho nó dễ đọc, dễ bảo trì và mở rộng hơn.
- Cung cấp một giao diện cho việc tạo đối tượng: Điều này cho phép thay đổi loại đối tượng được tạo ra tại thời điểm runtime.
- Hỗ trợ việc tạo ra các lớp con: Điều này cho phép mãng lập trình viên tạo ra các đối tượng mà không cần biết chính xác lớp con của đối tượng đó.

## Vấn Đề

Xét một ví dụ cụ thể: bạn đang xây dựng một ứng dụng quản lý vận chuyển, ban đầu chỉ hỗ trợ vận chuyển bằng xe tải. Khi ứng dụng ngày càng phổ biến, bạn muốn mở rộng nó để hỗ trợ vận chuyển bằng tàu biển. Việc thêm một lớp mới cho tàu biển vào mã nguồn có thể gây ra vấn đề khi mã nguồn đã ràng buộc chặt chẽ với lớp xe tải.

## Giải pháp

**Factory Method** đề xuất thay thế việc gọi trực tiếp constructor (sử dụng new) bằng cách gọi một phương thức factory đặc biệt. Các đối tượng vẫn được tạo thông qua new, nhưng việc này được thực hiện bên trong phương thức factory. Nhờ đó, bạn có thể thay đổi đối tượng được tạo bằng cách ghi đè phương thức factory trong lớp con

## Cấu Trúc

Mẫu thiết kế **Factory Method** thường bao gồm các thành phần sau:

- Product: Định nghĩa giao diện của đối tượng mà phương thức factory tạo ra.
- ConcreteProducts: Là lớp cụ thể triển khai Product, định nghĩa đối tượng cụ thể được tạo ra.
- Creator: Là lớp chứa phương thức factory, lớp này không triển khai phương thức factory mà chỉ định rằng các lớp con phải triển khai nó.
- ConcreteCreator: Override phương thức factory để trả về một instance của ConcreteProduct.

Ví dụ:

```java
interface Transport {
    void deliver();
}

class Truck implements Transport {
    @Override
    public void deliver() {
        System.out.println("Deliver by land in a box.");
    }
}

class Ship implements Transport {
    @Override
    public void deliver() {
        System.out.println("Deliver by sea in a container.");
    }
}

abstract class Logistics {
    abstract Transport createTransport();

    public void planDelivery() {
        Transport transport = createTransport();
        transport.deliver();
    }
}

class RoadLogistics extends Logistics {
    @Override
    Transport createTransport() {
        return new Truck();
    }
}

class SeaLogistics extends Logistics {
    @Override
    Transport createTransport() {
        return new Ship();
    }
}

public class Demo {
    public static void main(String[] args) {
        Logistics logistics = new RoadLogistics();
        logistics.planDelivery(); // Outputs: Deliver by land in a box.

        logistics = new SeaLogistics();
        logistics.planDelivery(); // Outputs: Deliver by sea in a container.
    }
}
```

Trong ví dụ này, `Transport` là `Product`, `Truck` và `Ship` là `Concrete Product`. `Logistics` là `Creator` cung cấp phương thức `createTransport()` (Factory Method), và `RoadLogistics` và `SeaLogistics` là `Concrete Creator`, nơi phương thức `createTransport()` được ghi đè để tạo ra các loại phương tiện cụ thể.

## Áp dụng khi nào, Ưu nhược

Sử dụng **Factory Method** khi:

- Bạn không biết trước đối tượng cụ thể nào sẽ được tạo.
- Bạn muốn cung cấp một cách để mở rộng các thành phần nội bộ của thư viện hoặc framework.
- Bạn muốn tiết kiệm tài nguyên bằng cách tái sử dụng các đối tượng thay vì tạo mới mỗi lần.

Ưu điểm:

- Tránh ràng buộc chặt chẽ giữa creator và sản phẩm cụ thể.
- Tuân theo nguyên lý **Single Responsibility** và **Open/Closed**.
  Nhược điểm:

- Có thể làm tăng độ phức tạp của mã do cần thêm nhiều lớp mới.
- **Factory Method** là một mẫu thiết kế linh hoạt, giúp tạo đối tượng một cách linh hoạt và mở rộng, phù hợp với nhiều tình huống phát triển phần mềm.

## Kết Luận

**Factory Method** là một mẫu thiết kế linh hoạt, giúp tách biệt quá trình tạo đối tượng khỏi mã sử dụng chúng, qua đó tăng cường khả năng mở rộng và bảo trì của mã nguồn. Mẫu thiết kế này đặc biệt hữu ích khi bạn muốn hệ thống của mình có khả năng hỗ trợ các đối tượng với các cách triển khai khác nhau mà không cần thay đổi mã nguồn đã có.
