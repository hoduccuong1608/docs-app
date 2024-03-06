---
sidebar_position: 1
---

# Thread, Multithread

## Khái Niệm

**Thread** hay **Multithread** đều có ý nghĩa như nhau trong kiến thức của bài học này. **Thread** dịch ra tiếng Việt là Luồng, và **Multithread** là Đa luồng. Luồng ở đây chính là Luồng xử lý của hệ thống. Và bởi vì lý do chính đáng để cho **Thread** ra đời cũng chính là để cho các ứng dụng có thể điều khiển nhiều **Thread** khác nhau một cách đồng thời, mà nhiều **Thread** đồng thời như vậy cũng có nghĩa là Đa **Thread**, hay **Multithread**. Chính vì vậy mà kiến thức **Thread** hay **Multithread** cũng chỉ là một.

Vai trò của **Thread** hay **Multithread** dĩ nhiên là cái gì đó liên quan đến Đa Luồng, Đa Nhiệm rồi. Nói cụ thể ra đó là hệ thống sẽ hỗ trợ chúng ta tách các tác vụ của ứng dụng ra làm nhiều Luồng (hay **Thread**), và hệ thống sẽ giúp xử lý các Luồng này một cách đồng thời. Như vậy nếu theo như những gì chúng ta làm quen với Java từ trước đến giờ, đó là nếu chúng ta có các tác vụ A, B, C, với các cách code cũ, hệ thống sẽ luôn xử lý tuần tự các tác vụ này, giả sử A sẽ được xử lý trước tiên, rồi đến B, và cuối cùng là đến C. Nhưng sau bài học hôm nay, nếu chúng ta tổ chức sao cho mỗi A, B và C là mỗi **Thread**, thì sẽ rất tuyệt vì chúng ta hoàn toàn có thể kêu hệ thống xử lý cả A, B và C cùng một lúc.
