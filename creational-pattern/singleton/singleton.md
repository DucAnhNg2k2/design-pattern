#### Singleton là gì: Là 1 design pattern phổ biến được sử dụng khi:

- Chỉ muốn tạo 1 instance duy nhất đối với 1 class.
- Cung cấp một điểm truy cập toàn cục (global access point) đến thực thể đó.

#### Khi nào nên sử dụng Singleton Pattern?

- Quản lý tài nguyên dùng chung: Chẳng hạn như kết nối cơ sở dữ liệu (Database Connection Pool), 1 phiên kết nối socket duy nhất(với FrontEnd)
- Đối tượng cấu hình (Configuration): Cung cấp một điểm truy cập duy nhất đến các thông số cấu hình của ứng dụng.
- Logging: Ghi log từ nhiều nơi khác nhau trong ứng dụng vào cùng một file hoặc dịch vụ.
- Caching: Tạo một bộ nhớ đệm (cache) dùng chung cho toàn bộ hệ thống.

#### Khi nào nên sử dụng

- Khi muốn sử dụng một đối tượng duy nhất cho toàn bộ dự án
- Khi muốn sử dụng một bộ nhớ duy nhất giúp quản lý dễ dàng hơn
- Khi muốn tránh khởi tạo nhiều lần(có thể do việc khởi tạo này tốn nhiều bộ nhớ, hoặc tốn nhiều thời gian)

#### Các ví dụ nên sử dụng Singleton:

`ConnectionPool Manager`

```
class SqlConnectionPoolManager {
    private static List<Connection> listConnections = new ArrayList<>();
}
```

- Vấn đề nếu không dùng Singleton:
  - Nếu bạn có thể tạo nhiều thực thể SqlConnectionPoolManager ở nhiều nơi trong code, mỗi thực thể sẽ quản lý một ArrayList kết nối hoàn toàn riêng biệt. Điều này phá vỡ hoàn toàn mục đích của connection pool.
- Lợi ích khi dùng Singleton:
  - Điều này có nghĩa là tất cả các yêu cầu kết nối đều được quản lý bởi một danh sách listConnections duy nhất.
  - Nhất quán: Mọi đoạn code yêu cầu một kết nối đều nhận được nó từ cùng một nguồn, đảm bảo tính nhất quán và ổn định cho hệ thống.

`DiscordBot`

- Vấn đề nếu không dùng Singleton: Mỗi lần new DiscordBot() có thể sẽ:

  - Tạo lại một object Bot mới
  - Thực hiện lại quá trình xác thực với Discord API bằng token
  - Việc này rất tốn thời gian, tiêu tốn bộ nhớ

- Lợi ích khi dùng Singleton:
  - Duy trì một phiên kết nối: Singleton đảm bảo bot chỉ khởi tạo và đăng nhập một lần duy nhất trong suốt vòng đời của ứng dụng. Mọi lệnh sendMessage sau đó chỉ đơn giản là sử dụng lại phiên kết nối đã có sẵn
  - Tiết kiệm bộ nhớ và CPU: Tránh hoàn toàn chi phí khởi tạo lại đối tượng và xác thực mạng không cần thiết.
  - Truy cập toàn cục tiện lợi: Cung cấp một cách thức đơn giản và an toàn để bất kỳ module nào trong ứng dụng cũng có thể gửi tin nhắn qua bot: DiscordBot.getInstance().sendMessage(...)

```
class DiscordBot {
    private static instance: DiscordBot;
    private bot = null;
    private token = "";

    private constructor() {}

    public static getInstance(): DiscordBot {
        if (this.instance) {
            this.instance = new DiscordBot();
            bot = new Bot(token)
        }
        return this.instance;
    }

    public sendMessage(chanel: string, message: string) {
        this.bot.sendMessage(channel, message);
    }
}
```

`DiscordBot.getInstance().sendMessage(chanel, message)`

#### Discussion:

#### Nên dùng Singleton, hay Static Class (https://www.baeldung.com/java-static-class-vs-singleton)

- Singleton có thể thừa kế từ các class khác hoặc triển khai interfaces, điều này làm cho nó linh hoạt hơn.
- Static Class không có khả năng khởi tạo lười biếng, tất cả các thành phần static thường được khởi tạo khi class được nạp vào memory.

```typescript
class Singleton {
  private static instance: Singleton;
  private value: number = 0;

  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }

  public static setValue(value: number): void {
    Singleton.instance.value = value;
  }
  public static getValue(): number {
    return Singleton.instance.value;
  }
}

const main = () => {
  const instance1 = Singleton.getInstance();
  const instance2 = Singleton.getInstance();

  Singleton.setValue(1);

  console.log(instance1 === instance2); // true
  console.log(Singleton.getValue()); // 1
};
main();
```
