---
sidebar_position: 5
---

# Đối tượng và Cấu trúc Dữ liệu

Chương này nhấn mạnh sự quan trọng của việc giữ các biến ẩn (private) để không làm lộ chi tiết triển khai và giữ sự linh hoạt trong việc thay đổi cấu trúc dữ liệu hoặc logic nội bộ. Một thực hành phổ biến nhưng không được khuyến khích là tự động thêm getters và setters cho mọi biến, về cơ bản biến đổi chúng từ private thành public, điều này làm mất đi lợi ích của việc đóng gói.

## Trừu tượng Hóa Dữ liệu

#### Concrete vs Abstract Data Structures

Ví dụ về hai cách biểu diễn một điểm trong hệ tọa độ Descartes được đưa ra để minh họa sự khác biệt giữa việc để lộ chi tiết triển khai (concrete) và ẩn nó đi (abstract).

#### Getter và Setter

Sử dụng chúng không tự động khiến code của bạn trở nên trừu tượng. Thay vào đó, cung cấp một giao diện tương tác mà không cần biết về chi tiết triển khai là cách tiếp cận tốt hơn.

Ví dụ 1: Sử dụng `getters/setters` một cách mù quáng mà không cung cấp một giao diện tương tác trừu tượng thực sự, ví dụ như việc chỉ cung cấp các phương thức `getX()`, `getY()`, `setX()`, `setY()` cho một lớp Point thay vì cung cấp các hàm để làm việc với điểm đó một cách trừu tượng như moveTo() hoặc distanceTo().

## Cấu trúc Dữ liệu và Đối tượng

#### Objects vs Data Structures

Đối tượng ẩn dữ liệu của chúng và cung cấp hàm để tương tác, trong khi cấu trúc dữ liệu phơi bày dữ liệu và không có hàm nghĩa. Hai cách tiếp cận này có ảnh hưởng đến cách thức thêm mới hàm hoặc dữ liệu vào hệ thống.

#### Geometry Example

Một ví dụ về cách tiếp cận theo cấu trúc dữ liệu (procedural) so với hướng đối tượng (polymorphic) trong việc tính toán diện tích của hình học được đề cập để minh họa cho sự khác biệt giữa hai phương pháp.

## Luật của Demeter

#### Law of Demeter (LoD)

Một hướng dẫn thiết kế nói rằng một module không nên biết về các chi tiết bên trong của các đối tượng mà nó sử dụng. Cách tiếp cận này giúp giảm sự phụ thuộc và giữ cho code trở nên linh hoạt hơn.

Ví dụ 2: Vi phạm Luật của Demeter bằng cách cho phép các chuỗi phương thức dài như `ctxt.getOptions().getScratchDir().getAbsolutePath()`, nơi mỗi phần của chuỗi là một lời gọi hàm khác, làm cho mã trở nên phức tạp và khó bảo trì. Một cách tiếp cận tốt hơn là `ctxt.createScratchFileStream(classFileName)`, nơi mà logic phức tạp được ẩn đi và giao diện tương tác trở nên sạch sẽ và rõ ràng hơn
