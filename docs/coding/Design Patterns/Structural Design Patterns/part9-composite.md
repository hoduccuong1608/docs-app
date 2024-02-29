---
sidebar_position: 9
---

# Composite

Design pattern Composite là một Design pattern cấu trúc cho phép bạn tổ chức các đối tượng thành các cấu trúc cây và sau đó làm việc với những cấu trúc đó như thể chúng là một đối tượng riêng lẻ.

## Ý Định

Design pattern Composite giúp tổ chức các đối tượng thành cấu trúc cây để biểu diễn phân cấp từng phần - toàn thể. Mẫu này cho phép khách hàng xử lý các đối tượng cá nhân và các thành phần của đối tượng một cách thống nhất.

## Vấn Đề

Trong lập trình hướng đối tượng, cả các đối tượng "đơn giản" và "phức tạp" thường có các phương thức tương tự nhau nhưng cách thức thực hiện lại khác biệt. Các đối tượng "phức tạp" có thể bao gồm nhiều đối tượng "đơn giản" khác nhau làm thành phần con. Quản lý một tập hợp lớn các đối tượng phức tạp có cấu trúc phân cấp có thể trở nên khó khăn nếu bạn muốn xử lý chúng một cách thống nhất.

Ví dụ, hãy tưởng tượng bạn có hai loại đối tượng: Sản phẩm (Products) và Hộp (Boxes). Một Hộp có thể chứa nhiều Sản phẩm cũng như một số Hộp nhỏ hơn. Những Hộp nhỏ này cũng có thể chứa một số Sản phẩm hoặc thậm chí là Hộp nhỏ hơn, và cứ thế tiếp tục.

Giả sử bạn quyết định tạo một hệ thống đặt hàng sử dụng các lớp này. Đơn hàng có thể chứa sản phẩm đơn giản không có bao bì, cũng như các hộp chứa đầy sản phẩm... và các hộp khác. Làm thế nào để bạn xác định tổng giá của một đơn hàng như vậy?

## Giải Pháp

Design pattern Composite đề xuất rằng bạn làm việc với Sản phẩm và Hộp thông qua một giao diện chung, giao diện này khai báo một phương thức để tính toán tổng giá.

Phương thức này hoạt động như thế nào? Đối với một sản phẩm, nó sẽ đơn giản trả về giá của sản phẩm. Đối với một hộp, nó sẽ đi qua mỗi mục mà hộp chứa, hỏi giá của nó và sau đó trả về tổng số cho hộp này. Nếu một trong những mục này là một hộp nhỏ hơn, hộp đó cũng sẽ bắt đầu đi qua nội dung của nó và cứ thế tiếp tục, cho đến khi giá của tất cả các thành phần nội bộ được tính toán. Một hộp thậm chí có thể thêm một số chi phí phụ vào giá cuối cùng, như chi phí đóng gói.

Lợi ích lớn nhất của cách tiếp cận này là bạn không cần phải quan tâm đến các lớp cụ thể của các đối tượng tạo thành cây. Bạn không cần biết liệu một đối tượng là một sản phẩm đơn giản hay một hộp phức tạp. Bạn có thể xử lý chúng tất cả giống nhau thông qua giao diện chung. Khi bạn gọi một phương thức, chính các đối tượng tự động chuyển yêu cầu xuống cây.

Cấu Trúc

- Component: Giao diện hoặc lớp trừu tượng chung cho cả `leaf` và `composite`. Nó chứa các hoạt động chung như `add()`, `remove()` và `getChild()`.

- Leaf: Lớp biểu diễn các đối tượng `leaf` trong cấu trúc phân cấp không có đối tượng con.

- Composite: Lớp biểu diễn các đối tượng có đối tượng con. Nó lưu trữ các đối tượng Component và thực thi các phương thức được định nghĩa trong giao diện Component, chuyển tiếp yêu cầu tới các đối tượng con của nó.

- Client: Tương tác với đối tượng thông qua giao diện Component.

## Ví Dụ Coding

Dưới đây là một ví dụ đơn giản về cách áp dụng mẫu thiết kế Composite trong Java:

```java
// Component
interface Graphic {
    void draw();
    void add(Graphic graphic);
    void remove(Graphic graphic);
    Graphic getChild(int index);
}

// Leaf
class Dot implements Graphic {
    @Override
    public void draw() {
        System.out.println("Draw a dot");
    }

    // Leaf không cần cài đặt các phương thức quản lý con.
    @Override public void add(Graphic graphic) {}
    @Override public void remove(Graphic graphic) {}
    @Override public Graphic getChild(int index) { return null; }
}

// Composite
class CompoundGraphic implements Graphic {
    private List<Graphic> children = new ArrayList<>();

    @Override
    public void draw() {
        for (Graphic child : children) {
            child.draw();
        }
    }

    @Override
    public void add(Graphic graphic) {
        children.add(graphic);
    }

    @Override
    public void remove(Graphic graphic) {
        children.remove(graphic);
    }

    @Override
    public Graphic getChild(int index) {
        return children.get(index);
    }
}

// Client code
public class ImageEditor {
    private CompoundGraphic allGraphics = new CompoundGraphic();

    public void load() {
        allGraphics.add(new Dot());
        allGraphics.add(new Circle());
        // Thêm các hình vẽ khác
    }

    public void groupSelected(List<Graphic> graphics) {
        CompoundGraphic group = new CompoundGraphic();
        for (Graphic graphic : graphics) {
            group.add(graphic);
            allGraphics.remove(graphic);
        }
        allGraphics.add(group);
        allGraphics.draw();
    }
}
```

Trong ví dụ này, `Graphic` là giao diện component chung, Dot là một `leaf` đơn giản không có con, và `CompoundGraphic` là một `composite` có thể chứa nhiều Graphic khác, bao gồm cả các `CompoundGraphic` khác, tạo thành một cấu trúc cây. Phương thức `draw()` được triển khai đệ quy qua cấu trúc cây, cho phép bạn xử lý cả cây như một đối tượng đơn lẻ.

**Ví Dụ: Hệ Thống Tệp**

Giả sử bạn đang xây dựng một hệ thống quản lý tệp, nơi mỗi thư mục có thể chứa các tệp hoặc thư mục con khác. Mục tiêu là có thể in ra cấu trúc của một thư mục bất kỳ, bao gồm tất cả các tệp và thư mục con của nó.

### Component Interface

```java
interface FileSystemItem {
    void print(String prefix);
}
```

### Leaf

```java
class File implements FileSystemItem {
    private String name;

    public File(String name) {
        this.name = name;
    }

    @Override
    public void print(String prefix) {
        System.out.println(prefix + "File: " + name);
    }
}
```

### Composite

```java
class Folder implements FileSystemItem {
    private String name;
    private List<FileSystemItem> children = new ArrayList<>();

    public Folder(String name) {
        this.name = name;
    }

    public void add(FileSystemItem item) {
        children.add(item);
    }

    @Override
    public void print(String prefix) {
        System.out.println(prefix + "Folder: " + name);
        for (FileSystemItem item : children) {
            item.print(prefix + "    ");
        }
    }
}
```

### Sử Dụng

```java
public class FileSystemDemo {
    public static void main(String[] args) {
        File file1 = new File("File1.txt");
        File file2 = new File("File2.txt");
        File file3 = new File("File3.txt");

        Folder folder1 = new Folder("Folder1");
        folder1.add(file1);

        Folder folder2 = new Folder("Folder2");
        folder2.add(file2);
        folder2.add(file3);

        Folder rootFolder = new Folder("RootFolder");
        rootFolder.add(folder1);
        rootFolder.add(folder2);

        rootFolder.print("");
    }
}
```

Trong ví dụ này, `FileSystemItem` là giao diện component, `File` là `leaf` biểu diễn các tệp, và `Folder` là `composite` có thể chứa cả `File` và `Folder` khác, cho phép bạn tạo ra một cấu trúc cây phức tạp. Phương thức `print` in ra cấu trúc của thư mục và tệp, minh họa cách mẫu `Composite` cho phép bạn xử lý cả thư mục và tệp một cách thống nhất thông qua giao diện chung.
