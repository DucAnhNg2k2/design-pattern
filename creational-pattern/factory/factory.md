#### Nhiệm vụ của Factory Pattern là quản lý và trả về các đối tượng theo yêu cầu, giúp cho việc khởi tạo đổi tượng một cách linh hoạt hơn.

Giả sử bạn muốn mua một chiếc xe ô tô, bạn sẽ phải đến các cửa hàng để xem xét các xe trước khi mua. Các cửa hàng sẽ đưa xe ra cho bạn xem.

```
public interface Car {

    void view();
}
```

```
public class Honda implements Car {

    @Override
    public void view() {
        System.out.printf("Honda view");
    }
}
```

```
public class Nexus implements Car {

    @Override
    public void view() {
        System.out.printf("Nexus view");
    }
}
```

```
public class Toyota implements Car {

    @Override
    public void view() {
        System.out.printf("Toyota view");
    }
}
```

```
public class Boss {

    public void viewHonda() {
        Honda honda = new Honda();
        honda.view();
    }

    public void viewNexus() {
        Nexus nexus = new Nexus();
        nexus.view();
    }

    public void viewToyota(){
        Toyota toyota = new Toyota();
        toyota.view();
    }
}
```

Việc làm này có vẻ mất thời gian và công sức của bạn đến từng cửa hàng để xem. Tuy nhiên có một cách khác đơn giản hơn, đó là đến một đại lý ô tô có bán nhiều hãng để xem xét hết tất cả các xe. Dễ dàng và nhanh chóng hơn phải không?

```
public class CarFactory {

    public void viewCar(String carType) {
        Car car;
        if (carType.equalsIgnoreCase("HONDA")) {
            car = new Honda();
            car.view();
        } else if (carType.equalsIgnoreCase("NEXUS")) {
            car = new Nexus();
            car.view();
        } else if (carType.equalsIgnoreCase("TOYOTA")) {
            car = new Toyota();
            car.view();
        }
    }
}
```

```
public class Boss {

    public void viewCar() {
        CarFactory carFactory = new CarFactory();
        carFactory.viewCar("HONDA");
        carFactory.viewCar("NEXUS");
        carFactory.viewCar("TOYOTA");
    }

}
```