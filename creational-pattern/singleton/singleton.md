### Singleton là gì: Là 1 design pattern phổ biến được sử dụng khi chỉ muốn tạo 1 instance duy nhất đối với 1 class.

### Các ví dụ nên sử dụng Singleton:
#### <i> Logging: Mỗi lần ghi log lại phải tạo hi sinh bộ nhớ ram khởi tạo đối tượng mới để ghi </i>

#### <i> Class Manager </i>
```
class CarManager {
    List<Car> listCars = new ArrayList<>();
    // module A sẽ thực hiện việc add các Car và lưu trữ
    // module B sẽ thực hiện việc lấy ra các danh sách => nếu module B tạo một bộ nhớ mới new CarManager() thì sẽ không còn Car 
    ==> private static List<Car> listCars = new ArrayList<>();
    ==> getInstancecCarManager()
}
```

```
class SqlConnectionPoolManager {
    private static List<Connection> listConnections = new ArrayList<>();
}
```
#### <i> Bot: Nếu mỗi lần muốn gửi tin nhắn bằng bot ở bất kì file nào, mà phải tạo một object DiscordBot mới => ảnh hưởng bộ nhớ => sử dụng Singleton </i>

```
// Import Bot from discord.js
class DiscordBot {
    private static instance: DiscordBot;
    private bot = null;
    private token = "";

    private constructor() {}

    public static getInstance(): DiscordBot {
        if (this.instance) {
            this.instance = new DiscordBot();
        //    bot = new Bot(token)
        }
        return this.instance;
    }

    private sendMessage(chanel: string, message: string) {
    //    this.bot.sendMessage(channel, message);
    }
}
```
#### <b> Tóm cái váy lại => Sử dụng ghi chỉ muốn sử dụng toàn cục một đối tượng duy nhất </b>

