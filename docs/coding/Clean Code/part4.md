---
sidebar_position: 3
---

# Comment

Chương 4 này tập trung vào việc sử dụng comment trong code. Dưới đây là tóm tắt chính của chương cùng với một ví dụ về việc không sử dụng đối số đầu ra.

## Mục đích của Comment

Mặc dù comment có thể hữu ích, nhưng chúng thường là dấu hiệu của sự thất bại trong việc biểu đạt ý định thông qua code. Comment nên là biện pháp cuối cùng, không phải là công cụ chính để giải thích code.

## Vấn đề của Comment

Comment có thể trở nên lỗi thời, gây hiểu nhầm, và đôi khi che giấu code xấu thay vì cải thiện nó. Chỉnh sửa code để nó rõ ràng hơn thường là cách tốt hơn là thêm comment.

## Loại Comment tốt

Một số comment vẫn cần thiết và hữu ích, bao gồm comment pháp lý, comment cung cấp thông tin không rõ ràng từ code, và TODO comments để chỉ ra công việc cần được hoàn thành.

## Loại Comment xấu

Bao gồm comment thừa thải, comment sai lệch, comment đánh dấu, và comment mô tả những gì code đang làm mà không giải thích tại sao nó cần làm điều đó.

## Khuyến hhích sử dụng code thay cho Comment

Nếu có thể, hãy sử dụng tên biến và hàm có ý nghĩa thay vì comment để giải thích code. Điều này giúp code tự giải thích và dễ bảo trì hơn.

## Một vài ví dụ

Đây là một comment giải thích tại sao test case này lại bị tắt

```java
// Don't run unless you
// have some time to kill – Đừng chạy hàm này, trừ khi mày quá rảnh
public void _testWithReallyBigFile() {
    writeLinesToFile(10000000);
    response.setBody(testFile);
    response.readyToSend(this);
    String responseString = output.toString();
    assertSubString("Content-Length: 1000000000", responseString);
    assertTrue(bytesSent > 1000000000);
}
```

Đôi khi việc để lại các dòng comment dạng //TODO là điều cần thiết. Trong trường hợp dưới đây, comment dạng TODO giải thích tại sao hàm này lại là hàm suy biến, và tương lai của hàm sẽ như
thế nào:

```java
// TODO-MdM these are not needed – Hàm này không cần thiết
// We expect this to go away when we do the checkout model
// Nó sẽ bị xóa khi chúng tôi thực hiện mô hình thanh toán
protected VersionInfo makeVersion() throws Exception {
    return null;
}
```

Dưới đây cho thấy một hàm đơn giản với các comment ở đầu hoàn toàn thừa thải. Comment này, có lẽ, còn làm người đọc mất thời gian hơn so với việc đọc code của hàm.

```java
// Utility method that returns when this.closed is true. Throws an exception
// if the timeout is reached.
// Phương thức return khi this.closed là true, phát sinh ngoại lệ nếu hết thời gian chờ
public synchronized void waitForClose(final long timeoutMillis) throws Exception {
    if(!closed)
    {
    wait(timeoutMillis);
    if(!closed)
    throw new Exception("MockResponseSender could not be
    closed");
    }
}
```
