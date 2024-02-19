---
sidebar_position: 1
---

# Giới thiệu Design Patterns

## Design Patterns là gì?

**Desgin Patterns** là các giải pháp điển hình cho các vấn đề thường gặp trong thiết kế phần mềm. Chúng giống như các bản vẽ sẵn có mà bạn có thể tùy chỉnh để giải quyết một vấn đề thiết kế tái diễn trong mã của mình.

Bạn không thể chỉ tìm một **pattern** và sao chép nó vào chương trình của mình, giống như bạn có thể làm với các hàm hoặc thư viện sẵn có. **Patterns** không phải là một đoạn mã cụ thể, mà là một khái niệm chung để giải quyết một vấn đề cụ thể. Bạn có thể theo dõi chi tiết của **patterns** và triển khai một giải pháp phù hợp với thực tế của chương trình của riêng bạn.

**Patterns** thường bị nhầm lẫn với thuật toán, bởi vì cả hai khái niệm đều mô tả giải pháp điển hình cho một số vấn đề đã biết. Trong khi một thuật toán luôn định rõ một tập hợp các hành động có thể đạt được một mục tiêu nào đó, một **pattern** là một mô tả ở mức độ cao hơn về một giải pháp. Mã của cùng một **pattern** áp dụng cho hai chương trình khác nhau có thể khác nhau.

Một phép so sánh với thuật toán là một công thức nấu ăn: cả hai đều có các bước rõ ràng để đạt được một mục tiêu. Ngược lại, một **pattern** giống như một bản vẽ: bạn có thể thấy kết quả và các tính năng của nó, nhưng thứ tự thực hiện cụ thể phụ thuộc vào bạn.

Một **pattern** bao gồm những gì?
Hầu hết các **pattern** được mô tả một cách rất chính thức để mọi người có thể tái tạo chúng trong nhiều bối cảnh. Dưới đây là các phần thường có trong mô tả của một **pattern**:

Ý định của **patterns** mô tả ngắn gọn cả vấn đề và giải pháp

- Động lực giải thích thêm về vấn đề và giải pháp mà **patterns** làm cho có thể.
- Cấu trúc của các lớp cho thấy từng phần của **patterns** và cách chúng liên quan với nhau.
- Ví dụ mã trong một trong những ngôn ngữ lập trình phổ biến giúp dễ dàng nắm bắt ý tưởng đằng sau **patterns**.

## Lịch sử phát triển

Lịch sử của Design **patterns** là câu hỏi thú vị nhưng không hoàn toàn chính xác. Design **patterns** không phải là các khái niệm khó hiểu, chúng là các giải pháp điển hình cho các vấn đề thường gặp trong thiết kế hướng đối tượng. Khi một giải pháp được lặp đi lặp lại trong nhiều dự án, cuối cùng ai đó sẽ đặt tên cho nó và mô tả giải pháp chi tiết. Đó chính xác là cách một **pattern** được khám phá.

Khái niệm về **patterns** lần đầu tiên được mô tả bởi Christopher Alexander trong cuốn sách **"A Patterns Language: Towns, Buildings, Construction"**. Cuốn sách mô tả một **"ngôn ngữ"** để thiết kế môi trường đô thị. Các đơn vị của ngôn ngữ này là **patterns**. Chúng có thể mô tả cửa sổ nên cao bao nhiêu, một tòa nhà nên có bao nhiêu tầng, khu vực xanh trong một khu phố nên rộng bao nhiêu, và như thế nào.

Ý tưởng này sau đó được tiếp nhận bởi bốn tác giả: **Erich Gamma**, **John Vlissides**, **Ralph Johnson**, và **Richard Helm**. Vào năm 1994, họ đã xuất bản cuốn **"Design Patterns: Elements of Reusable Object-Oriented Software"**, trong đó họ áp dụng khái niệm về **design patterns** vào lập trình. Cuốn sách giới thiệu 23 pattern giải quyết các vấn đề khác nhau của thiết kế hướng đối tượng và nhanh chóng trở thành sách bán chạy. Do tên dài, mọi người bắt đầu gọi nó là **"the book by the gang of four"** và sau đó được rút ngắn thành **"the GoF book"**.

Kể từ đó, hàng chục **patterns** hướng đối tượng khác đã được khám phá. **"Phương pháp patterns"** trở nên rất phổ biến trong các lĩnh vực lập trình khác, vì vậy nhiều **patterns** khác nay cũng tồn tại ngoài thiết kế hướng đối tượng.

## Tại sao nên biết Design pattern?

Sự thật là bạn có thể làm lập trình viên trong nhiều năm mà không biết về một **pattern** nào. Rất nhiều người làm điều đó. Tuy nhiên, ngay cả trong trường hợp đó, bạn có thể đang triển khai một số mẫu mà không hề biết. Vậy tại sao bạn lại dành thời gian để học chúng?

**Design pattern** là một bộ công cụ gồm các giải pháp đã được thử nghiệm và kiểm tra cho các vấn đề phổ biến trong thiết kế phần mềm. Ngay cả khi bạn chưa bao giờ gặp phải những vấn đề này, việc biết **Design pattern** vẫn hữu ích vì nó dạy bạn cách giải quyết mọi loại vấn đề bằng cách sử dụng các nguyên tắc thiết kế hướng đối tượng.

**Design pattern** xác định một ngôn ngữ chung mà bạn và đồng đội của mình có thể sử dụng để giao tiếp hiệu quả hơn. Bạn có thể nói: “Ồ, chỉ cần sử dụng Singleton cho việc đó” và mọi người sẽ hiểu ý tưởng đằng sau đề xuất của bạn. Không cần phải giải thích singleton là gì nếu bạn biết mẫu và tên của nó.

**Nguồn:** [Refactoring](https://refactoring.guru/design-patterns)
