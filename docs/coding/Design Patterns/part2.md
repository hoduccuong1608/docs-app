---
sidebar_position: 2
---

# Singleton

## Mục đích

**Singleton Pattern** là một kỹ thuật trong lập trình hướng đối tượng để đảm bảo một class chỉ tạo ra một instance duy nhất và cung cấp một điểm truy cập toàn cầu đến instance này. Điều này hữu ích trong việc quản lý tài nguyên chia sẻ, như kết nối cơ sở dữ liệu hoặc cấu hình hệ thống.

## Vấn đề

**Singleton Pattern** giải quyết hai vấn đề cơ bản:

Đảm bảo một class chỉ có một instance: Điều này ngăn chặn việc tạo ra nhiều instances của một class, giúp kiểm soát tài nguyên được sử dụng trong ứng dụng.
Cung cấp một điểm truy cập toàn cầu đến instance đó: Điều này giúp các phần khác của ứng dụng dễ dàng truy cập vào instance duy nhất đó mà không cần tạo mới.
Giải pháp
Để triển khai **Singleton Pattern**, chúng ta thực hiện các bước sau:

- **Private Constructor**: Đảm bảo rằng constructor của class không thể được gọi từ bên ngoài class, ngăn chặn việc tạo instance mới từ bên ngoài.
- **Static Method**: Cung cấp một phương thức tĩnh trả về instance duy nhất của class. Nếu instance chưa tồn tại, phương thức này sẽ tạo instance; nếu đã tồn tại, nó sẽ trả về instance hiện có.

## Ví dụ Cài đặt

Giả sử chúng ta muốn tạo một class **DatabaseConnector** để quản lý kết nối cơ sở dữ liệu. Dưới đây là cách chúng ta có thể áp dụng Singleton Pattern:

```java
public class DatabaseConnector {
    private static DatabaseConnector instance;

    private DatabaseConnector() {
        // Private constructor để ngăn việc tạo instance mới từ bên ngoài
    }

    public static synchronized DatabaseConnector getInstance() {
        if (instance == null) {
            instance = new DatabaseConnector();
        }
        return instance;
    }

    public void connect() {
        // Phương thức để kết nối cơ sở dữ liệu
    }
}
```

Trong ví dụ trên, DatabaseConnector sử dụng một constructor private để ngăn chặn việc tạo instance mới từ bên ngoài class. Phương thức `getInstance()` đồng bộ hóa để đảm bảo tính an toàn trong môi trường đa luồng, đảm bảo chỉ có một instance duy nhất được tạo.

Môi trường Đa Luồng và Cải Tiến
Trong môi trường đa luồng, việc đảm bảo một instance duy nhất càng trở nên phức tạp. Một cách tiếp cận phổ biến để giảm thiểu chi phí hiệu suất trong việc đồng bộ hóa là sử dụng kỹ thuật **Double-Checked Locking**:

```java
public class DatabaseConnector {
private static volatile DatabaseConnector instance;

    private DatabaseConnector() {
        // Private constructor
    }

    public static DatabaseConnector getInstance() {
        if (instance == null) {
            synchronized (DatabaseConnector.class) {
                if (instance == null) {
                    instance = new DatabaseConnector();
                }
            }
        }
        return instance;
    }

}
```

Ví dụ trên đảm bảo rằng chỉ có một instance của **DatabaseConnector** được tạo, ngay cả trong môi trường đa luồng, mà không cần đồng bộ hóa mọi lần truy cập phương thức `getInstance()`.

1. Kiểm Tra Lần Đầu (First Check)
   if (instance == null): Phương thức kiểm tra trước tiên xem thể hiện (instance) của DatabaseConnector đã tồn tại chưa. Nếu đã tồn tại, nó sẽ trả về ngay lập tức, tránh việc phải thực hiện khóa đồng bộ, giúp tăng hiệu suất bởi vì hầu hết các lần truy cập sau đó đều không cần tạo thể hiện mới.

2. Đồng Bộ Hóa (Synchronization)
   synchronized (DatabaseConnector.class): Nếu instance là null, tức là chưa có thể hiện nào được tạo, phương thức tiếp tục bằng cách đồng bộ hóa một khối mã trên class DatabaseConnector. Điều này đảm bảo rằng chỉ một luồng có thể thực hiện khối mã bên trong tại một thời điểm, ngăn chặn việc tạo thêm thể hiện từ các luồng khác.

3. Kiểm Tra Lần Hai (Second Check)
   if (instance == null): Sau khi vào được khối đồng bộ, phương thức lại kiểm tra instance một lần nữa. Kiểm tra này cần thiết vì trong thời gian chờ đợi để vào được khối đồng bộ, một luồng khác có thể đã tạo thể hiện và gán cho instance. Kiểm tra lần hai đảm bảo rằng thể hiện thực sự chưa được tạo trước khi tạo mới.
4. Tạo Thể Hiện Mới
   instance = new DatabaseConnector(): Nếu instance vẫn là null sau kiểm tra lần hai, thể hiện mới của DatabaseConnector được tạo và gán cho instance.
   Trả Về Thể Hiện
   return instance: Cuối cùng, thể hiện của DatabaseConnector (mới tạo hoặc đã tồn tại) được trả về cho caller.

## Ưu và Nhược điểm

### Ưu điểm:

- Kiểm soát chặt chẽ việc truy cập và số lượng thể hiện của một class.
- Tiết kiệm tài nguyên khi cần sử dụng một đối tượng chung cho toàn bộ ứng dụng.
- Cung cấp một điểm truy cập toàn cục, giúp dễ dàng truy cập từ bất kỳ nơi nào trong ứng dụng.

### Nhược điểm:

- Vi phạm nguyên tắc Single Responsibility Principle, khiến class vừa quản lý việc tạo instance vừa phải thực hiện nhiệm vụ chính của mình.
- Khó khăn trong việc kiểm thử do phụ thuộc vào instance duy nhất, làm giảm tính linh hoạt và tái sử dụng của code.
- Có thể gây ra vấn đề trong môi trường đa luồng nếu không cẩn thận trong việc đồng bộ hóa.

## Ứng dụng Thực tế

Singleton Pattern thường được sử dụng trong các trường hợp như quản lý kết nối cơ sở dữ liệu, logger, cấu hình ứng dụng, hoặc quản lý cache. Mỗi trong những tình huống này đều yêu cầu một thể hiện duy nhất để quản lý trạng thái và hành vi chung cho toàn bộ ứng dụng.

## Kết Luận

**Singleton Pattern** là một công cụ mạnh mẽ để quản lý tài nguyên chia sẻ và cung cấp điểm truy cập toàn cầu. Tuy nhiên, việc sử dụng nó cần cân nhắc kỹ lưỡng để tránh làm giảm tính linh hoạt và khả năng mở rộng của ứng dụng. Các giải pháp như **Double-Checked Locking** có thể giúp giảm thiểu tác động đến hiệu suất trong môi trường đa luồng.

**Nguồn:** [Refactoring](https://refactoring.guru/design-patterns)
