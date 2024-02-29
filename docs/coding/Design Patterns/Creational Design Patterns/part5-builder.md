---
sidebar_position: 5
---

# Builder

Design Pattern **Builder** Xây Dựng Đối Tượng Phức Tạp Bước Đến Bước
Design Pattern **Builder** là một trong những Design Pattern sáng tạo (**Creational Design Pattern**) cho phép bạn xây dựng các đối tượng phức tạp từng bước một. Design Pattern này cho phép bạn tạo ra các kiểu và biểu diễn khác nhau của một đối tượng sử dụng cùng một mã xây dựng.

## Vấn Đề

Hãy tưởng tượng một đối tượng phức tạp yêu cầu khởi tạo một cách công phu, từng bước cho nhiều trường và đối tượng lồng nhau. Mã khởi tạo như vậy thường được chôn vùi bên trong một `constructor` khổng lồ với hàng loạt tham số. Hoặc còn tồi tệ hơn: rải rác khắp mã khách hàng.

Bạn có thể khiến chương trình trở nên quá phức tạp bằng cách tạo một lớp con cho mọi cấu hình có thể của đối tượng.

## Giải Pháp

Design Pattern **Builder** đề xuất rằng bạn nên tách mã xây dựng đối tượng ra khỏi lớp của chính nó và di chuyển nó vào các đối tượng riêng biệt được gọi là `builders`.

**Builder** cho phép bạn xây dựng các đối tượng phức tạp từng bước một. **Builder** không cho phép các đối tượng khác truy cập vào sản phẩm trong khi nó đang được xây dựng.

## Cấu Trúc

- Builder Interface: Khai báo các bước xây dựng sản phẩm mà tất cả các loại `builder` đều phải thực hiện.
- Concrete Builders: Cung cấp các triển khai cụ thể của các bước xây dựng. Các `builder` cụ thể có thể tạo ra các sản phẩm không tuân theo cùng một `interface`.
- Sản Phẩm: Là đối tượng kết quả. Sản phẩm được xây dựng bởi các `builder` khác nhau không nhất thiết phải thuộc cùng một lớp hoặc `interface`.
- Director: Xác định thứ tự gọi các bước xây dựng để bạn có thể tạo và tái sử dụng cấu hình cụ thể của sản phẩm.
- Client: Phải gắn kết một trong các đối tượng `builder` với `director`. Thông thường, việc này được thực hiện một lần, qua tham số của `constructor` của `director`.

Hãy xem xét ví dụ về cách Builder có thể được sử dụng để xây dựng các kiểu xe ô tô khác nhau và tạo ra hướng dẫn sử dụng tương ứng cho chúng.

```java
// Builder Interface
interface Builder {
    void reset();
    void setSeats(int number);
    void setEngine(Engine engine);
    void setTripComputer(boolean present);
    void setGPS(boolean present);
}

// Concrete Builder cho Car
class CarBuilder implements Builder {
    private Car car;

    @Override
    public void reset() {
        this.car = new Car();
    }

    @Override
    public void setSeats(int number) {
        car.setSeats(number);
    }

    @Override
    public void setEngine(Engine engine) {
        car.setEngine(engine);
    }

    // Các phương thức khác...

    public Car getProduct() {
        Car product = this.car;
        this.reset();
        return product;
    }
}

// Director
class Director {
    public void constructSportsCar(Builder builder) {
        builder.reset();
        builder.setSeats(2);
        builder.setEngine(new SportEngine());
        builder.setTripComputer(true);
        builder.setGPS(true);
    }

    // Có thể có thêm các phương thức khác để xây dựng các loại xe khác...
}

// Client code
class Application {
    public static void main(String[] args) {
        Director director = new Director();
        CarBuilder builder = new CarBuilder();

        director.constructSportsCar(builder);
        Car car = builder.getProduct();
        // Sử dụng đối tượng car...
    }
}
```

**Ví dụ điển hình** : Xây dựng một Hamburger
Giả sử bạn đang xây dựng một ứng dụng để cho phép người dùng tùy chỉnh và đặt hamburger của họ. Một hamburger có thể có nhiều lựa chọn như loại bánh mì, loại thịt, các loại rau, loại phô mai, và các loại topping khác như sốt mayonnaise, ketchup, mustard, v.v.

1. Không sử dụng **Builder**

Nếu không sử dụng **Builder**, bạn có thể cần một `constructor` với rất nhiều tham số để tạo ra một hamburger, hoặc nhiều `constructors` khác nhau tùy thuộc vào sự kết hợp của các thành phần. Điều này làm cho mã nguồn trở nên rối và khó quản lý, đặc biệt khi bạn muốn thêm các lựa chọn mới cho hamburger.

```java
public class Hamburger {
    public Hamburger(String breadType, String meatType, boolean cheese, boolean lettuce, boolean tomato, boolean onions, String sauce) {
        // constructor logic...
    }
}
```

Với mỗi sự kết hợp mới của các thành phần, bạn có thể cần một `constructor` mới hoặc phải xử lý một danh sách dài các tham số, trong đó nhiều tham số có thể không cần thiết cho một số đơn hàng cụ thể.

2. Sử dụng **Builder**
   Builder giúp giải quyết vấn đề này bằng cách cho phép xây dựng một đối tượng từng bước một và chỉ cung cấp các thành phần cần thiết.

```java
public class HamburgerBuilder {
    private String breadType;
    private String meatType;
    private boolean cheese;
    private boolean lettuce;
    private boolean tomato;
    private boolean onions;
    private String sauce;

    public HamburgerBuilder setBreadType(String breadType) {
        this.breadType = breadType;
        return this;
    }

    public HamburgerBuilder setMeatType(String meatType) {
        this.meatType = meatType;
        return this;
    }

    // Các phương thức setter khác...

    public Hamburger build() {
        return new Hamburger(breadType, meatType, cheese, lettuce, tomato, onions, sauce);
    }
}
```

Với **Builder**, người dùng có thể tạo ra một hamburger chỉ với những thành phần họ muốn mà không cần phải xử lý nhiều tham số không cần thiết:

```java
Hamburger hamburger = new HamburgerBuilder().setBreadType("brioche").setMeatType("beef").setCheese(true).build();
```

3. Sự khác biệt giữa `builder` và `getters` `setters`

Đến đây nhiều người sẽ hỏi nó khác gì với việc khởi tạo 1 đối tượng không tham số bằng từ khóa `new`, rồi gọi các hàm `setters` (Tính đóng gói trong lập trình hướng đối tượng).

Sử dụng `getters` và `setters` để tương tác với các thuộc tính của đối tượng là 1 điều cơ bản trong lập trình hướng đối tượng. Tuy nhiên, Design pattern **Builder** giải quyết một số vấn đề cụ thể mà việc đơn thuần sử dụng `getters` và `setters` có thể không đủ.

Dưới đây là một số điểm khác biệt và lợi ích của việc sử dụng Design pattern **Builder** so với việc chỉ sử dụng `getters` và `setters`:

- Tính Bất Biến (Immutability)

  Một lợi ích quan trọng của **Builder** là khả năng tạo ra các đối tượng bất biến. Khi sử dụng chỉ `getters` và `setters`, đối tượng của bạn thường dễ bị thay đổi trạng thái sau khi được khởi tạo. Điều này có thể gây ra các vấn đề trong môi trường đa luồng hoặc khi đối tượng được chia sẻ rộng rãi trong ứng dụng.
  Với **Builder**, bạn có thể tập trung tất cả cấu hình cần thiết vào một chuỗi lệnh xây dựng, sau đó tạo ra một đối tượng bất biến mà không cần phơi bày `setters` cho người dùng.

- Rõ Ràng và Dễ Đọc

  Khi xây dựng một đối tượng có nhiều thuộc tính, việc sử dụng **Builder** giúp mã của bạn rõ ràng và dễ đọc hơn nhiều so với việc sử dụng nhiều lời gọi setter liên tiếp. Điều này đặc biệt quan trọng khi có một số thuộc tính là bắt buộc và một số khác là tùy chọn.

- Kiểm Soát Quá Trình Xây Dựng

  **Builder** cung cấp một cách để kiểm soát quá trình xây dựng đối tượng một cách tinh tế hơn. Bạn có thể đưa ra các ràng buộc, kiểm tra tính hợp lệ, hoặc thực hiện các bước xử lý trước và sau khi đối tượng được xây dựng mà không làm bẩn constructor hoặc yêu cầu người dùng gọi một loạt các phương thức trong trật tự đúng đắn.

- Tái Sử Dụng và Cấu Hình

  **Builder** cho phép tái sử dụng cùng một đối tượng builder cho việc tạo nhiều đối tượng, hoặc thậm chí cấu hình một đối tượng builder trước rồi sau đó tái sử dụng nó để tạo nhiều đối tượng có cấu hình tương tự. Điều này khó có thể thực hiện một cách sạch sẽ khi chỉ sử dụng `getters` và `setters`.

Tóm lại, mặc dù việc sử dụng `getters` và `setters` là một phần quan trọng của lập trình hướng đối tượng và có thể đủ cho nhiều tình huống đơn giản, Design pattern Builder cung cấp một cấp độ linh hoạt, kiểm soát và sự rõ ràng cao hơn khi tạo ra các đối tượng phức tạp, đặc biệt là khi chúng cần được cấu hình một cách tinh tế hoặc khi chúng là bất biến.

## Vấn đề với đa luồng

### Vấn đề

Trong môi trường đa luồng, Design pattern **Builder** có thể gặp phải vấn đề nếu cùng một `instance` của **Builder** được sử dụng bởi nhiều luồng cùng một lúc mà không có cơ chế đồng bộ hóa.
Tại Sao **Builder** Có Thể Gặp Vấn Đề Trong Đa Luồng?
Chia Sẻ Trạng Thái Mutable: Nếu các luồng sử dụng chung một instance của **Builder** để tạo các đối tượng, trạng thái mutable bên trong **Builder** (giá trị của các thuộc tính đang được xây dựng) có thể bị thay đổi một cách không nhất quán giữa các bước xây dựng từ các luồng khác nhau. Điều này dẫn đến việc tạo ra các đối tượng không đúng như mong muốn.

Race Condition: Các luồng cạnh tranh nhau để thiết lập giá trị cho các thuộc tính của **Builder** có thể dẫn đến `race condition`, khiến cho kết quả cuối cùng phụ thuộc vào thứ tự thực thi của các luồng, làm cho kết quả không thể dự đoán trước.

Trong trường hợp phổ biến, mỗi luồng thực sự sẽ tạo ra một instance riêng của Builder, như bạn đã nói, và sẽ không có vấn đề gì về việc truy cập đồng thời vì mỗi luồng đều làm việc trên một instance độc lập. Vấn đề mà tôi mô tả trước đó thường chỉ xảy ra trong một số tình huống cụ thể, nơi mà một instance của Builder được chia sẻ giữa các luồng hoặc được truyền từ luồng này sang luồng khác.

Khi nào một Instance của Builder Có Thể Bị Nhiều Luồng Truy Cập?
Builder Được Chia Sẻ Qua Context: Trong một số ứng dụng lớn, đặc biệt là những ứng dụng có kiến trúc phức tạp, một instance của Builder có thể được chia sẻ qua một context chung hoặc được lưu trữ trong một biến toàn cục, làm cho nó trở nên khả dụng cho nhiều luồng. Đây có thể là một quyết định thiết kế không mong muốn nhưng không phải lúc nào cũng dễ dàng tránh khỏi.

```java
public class ArticleBuilder {
    private String title;
    private String content;
    private List<String> tags;
    private String category;

    // Các phương thức setter cho phép tùy chỉnh từng bước
    public ArticleBuilder setTitle(String title) {
        this.title = title;
        return this;
    }

    public ArticleBuilder setContent(String content) {
        this.content = content;
        return this;
    }

    // Các phương thức setter khác...

    public Article build() {
        // Trả về một đối tượng Article mới dựa trên cấu hình hiện tại của Builder
        return new Article(title, content, tags, category);
    }
}

// Context chung hoặc biến toàn cục lưu trữ ArticleBuilder
public class ApplicationContext {
    public static final ArticleBuilder articleBuilder = new ArticleBuilder();
}
```

Tái Sử Dụng Builder: Trong một số trường hợp, có thể có ý định tái sử dụng Builder để tạo ra nhiều đối tượng tương tự nhau trong các luồng khác nhau, có thể là để giảm bớt việc khởi tạo mới Builder liên tục, nhất là khi quá trình khởi tạo có chi phí cao.

```java
ExecutorService executor = Executors.newFixedThreadPool(5);

for (int i = 0; i < 10; i++) {
    executor.submit(() -> {
        synchronized (ApplicationContext.articleBuilder) {
            Article article = ApplicationContext.articleBuilder
                                    .setTitle("Some title")
                                    .setContent("Some content")
                                    .setCategory("News")
                                    .build();
            // Lưu trữ hoặc xử lý bài viết
        }
    });
}
```

Singleton Builder: Trong một số kiến trúc, Builder có thể được thiết kế theo mô hình Singleton, nơi mà chỉ có một instance của Builder tồn tại trong suốt vòng đời của ứng dụng. Mặc dù đây không phải là một cách tiếp cận phổ biến cho Builder, nhưng trong một số tình huống cụ thể, nó có thể được sử dụng để đảm bảo một số loại trạng thái hoặc cấu hình toàn cục.

### Giải Pháp

Để sử dụng **Builder** trong môi trường đa luồng một cách an toàn, bạn có thể áp dụng một trong các giải pháp sau:

Tránh Chia Sẻ **Builder**: Đảm bảo rằng mỗi luồng sử dụng một instance riêng của **Builder** để tránh chia sẻ trạng thái `mutable`. Cách tiếp cận này giảm thiểu vấn đề về đồng bộ hóa và `race condition`.

```java
// Mỗi luồng tạo một instance mới của Builder
Thread thread1 = new Thread(() -> {
    Product product1 = new ProductBuilder().setName("Product 1").build();
    // Sử dụng product1...
});

Thread thread2 = new Thread(() -> {
    Product product2 = new ProductBuilder().setName("Product 2").build();
    // Sử dụng product2...
});

thread1.start();
thread2.start();
```

1. Sử Dụng Đồng Bộ Hóa: Nếu việc chia sẻ một instance của Builder giữa các luồng là không tránh khỏi, bạn cần phải đồng bộ hóa việc truy cập và sửa đổi trạng thái của Builder để đảm bảo tính nhất quán.

```java
public class ThreadSafeProductBuilder {
    // Khai báo các thuộc tính của Builder
    synchronized void setProperty(Property property) {
        // Thiết lập thuộc tính một cách đồng bộ
    }

    synchronized Product build() {
        // Tạo và trả về đối tượng Product một cách đồng bộ
    }
}
```

2. Immutable Objects: Trong một số trường hợp, bạn có thể thiết kế Builder để tạo ra các đối tượng bất biến. Mỗi phương thức thiết lập trong Builder sẽ trả về một instance mới của Builder với trạng thái đã được cập nhật. Phương pháp này tự nhiên là thread-safe do bất biến của đối tượng.

Tóm lại, DP Builder có thể gặp vấn đề trong môi trường đa luồng nếu cùng một instance của Builder được sử dụng bởi nhiều luồng cùng một lúc mà không có biện pháp đồng bộ hóa. Việc tránh chia sẻ Builder giữa các luồng hoặc sử dụng đồng bộ hóa là hai cách phổ biến để giải quyết vấn đề này.

## Khi nào nên sử dụng Builder?

- Khi có một đối tượng với nhiều thuộc tính cần được khởi tạo, và đặc biệt, không phải tất cả thuộc tính đều cần thiết cho mọi trường hợp.
- Khi bạn muốn tạo ra một đối tượng có tính bất biến mà vẫn có thể có nhiều cách cấu hình khác nhau mà không làm rối mã nguồn.
- Khi bạn muốn mã nguồn của bạn dễ đọc và dễ quản lý hơn, thay vì phải đối mặt với một `constructor` lớn với đầy rẫy các tham số.

## Khả Năng Áp Dụng

Sử dụng **Builder** để loại bỏ `constructor telescoping`.
Khi bạn muốn mã của mình có thể tạo ra các biểu diễn khác nhau của một sản phẩm (ví dụ: nhà bằng đá và nhà bằng gỗ).
Khi cần xây dựng **Composite trees** hoặc các đối tượng phức tạp khác.

## Ưu và Nhược Điểm

Ưu điểm:

- Xây dựng đối tượng từng bước, có thể trì hoãn hoặc chạy các bước xây dựng một cách đệ quy.
- Sử dụng lại cùng một mã xây dựng khi xây dựng các biểu diễn khác nhau của sản phẩm.
- Tuân thủ nguyên tắc **Single Responsibility** bằng cách tách mã xây dựng phức tạp ra khỏi lớp sản phẩm.

Nhược điểm:

- Tổng thể mã nguồn có thể trở nên phức tạp hơn do mẫu thiết kế yêu cầu tạo ra nhiều lớp mới.

## Mối Quan Hệ với Các Mẫu Thiết Kế Khác

**Builder**, cùng với **Abstract Factory** và **Prototype**, thường được bắt đầu từ **Factory Method** và phát triển theo hướng linh hoạt hơn nhưng phức tạp hơn.
**Builder** tập trung vào việc xây dựng từng bước cho đối tượng phức tạp, trong khi **Abstract Factory** chuyên tạo ra gia đình của các đối tượng liên quan.
Bạn có thể kết hợp **Builder** với **Bridge**: lớp `director` đóng vai trò như một trừu tượng, trong khi các `builder` khác nhau hoạt động như các triển khai.

Mẫu thiết kế **Builder** là một công cụ mạnh mẽ để xử lý việc xây dựng các đối tượng phức tạp, giúp mã nguồn trở nên linh hoạt và dễ bảo trì hơn.
