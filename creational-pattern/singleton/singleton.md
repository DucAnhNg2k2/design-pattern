#### Singleton là gì: Là 1 design pattern phổ biến được sử dụng khi chỉ muốn tạo 1 instance duy nhất đối với 1 class.

#### Các ví dụ nên sử dụng Singleton:
- Logging: Mỗi lần ghi log lại phải tạo hi sinh bộ nhớ ram khởi tạo đối tượng mới để ghi
- Class Manager
```
class CarManager {
    List<Car> listCars = new ArrayList<>();
}
```
`` 
Module A sẽ thực hiện việc add các Car và lưu trữ.  
Module B sẽ thực hiện việc lấy ra các danh sách => nếu Module B tạo một bộ nhớ mới new CarManager() thì sẽ không còn listCars(do không cùng 1 địa chỉ ô nhớ) 
``

```
class SqlConnectionPoolManager {
    private static List<Connection> listConnections = new ArrayList<>();
}
```
`` Tương tự với ConnectionPool Manager``

- Bot: Nếu mỗi lần muốn gửi tin nhắn bằng bot ở bất kì file code nào, mà phải khởi tạo object DiscordBot mới -> ảnh hưởng bộ nhớ -> sử dụng Singleton

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
``
DiscordBot.getInstance().sendMessage(chanel, message)
``

#### Khi nào nên sử dụng
- Khi muốn sử dụng một đối tượng duy nhất cho toàn bộ dự án
- Khi muốn sử dụng một bộ nhớ duy nhất giúp quản lý dễ dàng hơn
- Khi muốn tránh khởi tạo nhiều lần(có thể do việc khởi tạo này tốn nhiều bộ nhớ, hoặc tốn nhiều thời gian)

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
}
main()
```