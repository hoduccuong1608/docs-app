---
sidebar_position: 2
---

# Hàm

Chương 3 tập trung vào việc xây dựng hàm hiệu quả trong lập trình, coi hàm như là cơ sở của mọi chương trình. Để tạo ra hàm hiệu quả, chúng ta cần tuân thủ những nguyên tắc cơ bản sau:

## Hàm phải ngắn

Hàm cần được giữ ngắn gọn, dễ đọc, và chỉ làm một việc. Nguyên tắc là nó phải đủ nhỏ và khi cần thiết, phải được chia nhỏ hơn nữa.

```java
// Không tốt: Hàm dài và thực hiện nhiều nhiệm vụ
public String prepareReport(Date date, List<Data> dataList, boolean detailed) {
    // logic để chuẩn bị báo cáo
}

// Tốt: Chia nhỏ thành các hàm nhỏ, mỗi hàm làm một việc
public String generateReportDateHeader(Date date) {
    // chỉ tạo tiêu đề báo cáo dựa trên ngày
}

public String compileReportData(List<Data> dataList) {
    // chỉ xử lý dữ liệu cho báo cáo
}

```

## Một hàm, một nhiệm vụ

Mỗi hàm chỉ nên thực hiện một chức năng cụ thể. Nếu hàm thực hiện nhiều hơn một nhiệm vụ, nó cần được chia nhỏ.

```java
// Không tốt: Tên hàm mơ hồ
public void process() {
    // xử lý dữ liệu
}

// Tốt: Tên hàm mô tả rõ ràng chức năng
public void calculateMonthlyExpenses() {
    // tính toán chi phí hàng tháng
}

```

## Tên hàm phải mô tả chức năng

Tên hàm cần rõ ràng và mô tả chính xác công việc mà hàm đó thực hiện, giúp người đọc dễ dàng hiểu được mục đích của hàm.

```java
// Không tốt: Hàm với quá nhiều tham số
public void createAccount(String username, String password, String email, Date dob, String country) {
    // tạo tài khoản
}

// Tốt: Sử dụng đối tượng để giảm số lượng tham số
public void createAccount(UserDetails userDetails) {
    // tạo tài khoản với thông tin từ đối tượng UserDetails
}
```

## Hạn chế số lượng tham số

Hàm nên được thiết kế với ít tham số nhất có thể. Nhiều tham số làm tăng độ phức tạp và khó khăn trong việc hiểu code.

```java
// Không tốt: Hàm có tác dụng phụ, thay đổi trạng thái toàn cục
public boolean validateUser(String username, String password) {
    if (database.authenticate(username, password)) {
        Session.start(); // Tác dụng phụ: khởi động một session
        return true;
    }
    return false;
}

// Tốt: Hàm không có tác dụng phụ
public boolean authenticateUser(String username, String password) {
    return database.authenticate(username, password);
}
// Session.start() được gọi bên ngoài hàm, sau khi người dùng được xác thực thành công
```

## Không sử dụng đối số đầu ra

Tránh sử dụng đối số như một cách để trả kết quả từ hàm; sử dụng giá trị trả về thay vào đó.

```java
// Không tốt: Sử dụng đối số đầu ra
public void calculateTotal(int[] items, int[] result) {
    int total = 0;
    for (int item : items) {
        total += item;
    }
    result[0] = total; // sử dụng đối số đầu ra để trả về kết quả
}

// Sử dụng
int[] items = {1, 2, 3};
int[] result = new int[1]; // cần phải khởi tạo trước
calculateTotal(items, result);
System.out.println("Tổng là: " + result[0]);


// Tốt: Sử dụng giá trị trả về
public int calculateTotal(int[] items) {
    int total = 0;
    for (int item : items) {
        total += item;
    }
    return total; // trả về kết quả qua giá trị trả về của hàm
}

// Sử dụng
int[] items = {1, 2, 3};
int result = calculateTotal(items);
System.out.println("Tổng là: " + result);

```

## Không có tác dụng phụ

Hàm không nên có tác dụng phụ, nghĩa là không thay đổi trạng thái của hệ thống hoặc tạo ra một sự thay đổi không mong muốn nào đó ngoài việc thực hiện nhiệm vụ chính của nó.
