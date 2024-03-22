#### Factory Pattern là gì: Factory Pattern là một design pattern giúp quản lý và trả về các đối tượng theo yêu cầu, giúp cho việc khởi tạo đổi tượng một cách linh hoạt hơn.

`
Giả sử có khá nhiều chiếc xe và client muốn xem một chiếc xe bất kì, chúng ta sẽ không thể đoán trước được cụ thể client muốn xem xe gì, mà chỉ biết toàn bộ các option có thể được lựa chọn `

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

`Đoạn code này if else nhiều lần khiến code không được client và giả sử sau này mở rộng thêm, muốn thêm 1 chiếc xe nữa thì tất cả những đoạn code if else đấy sẽ phải sửa lại thêm 1 điều kiện của chiếc xe vừa thêm`

`Về ưu điểm:
Nếu dùng Factory Pattern thì sẽ chỉ cần tạo thêm 1 class implements Car, và thêm vào Enum là được`

```
enum CarType {
  HONDA,
  NEXUS,
  TOYOTA,
}

public class CarFactory {
  static buildCar(type: CarType) {
    switch (type) {
      case CarType.HONDA:
        return new HondoCar();
      case CarType.NEXUS:
        return new NexusCar();
      case CarType.TOYOTA:
        return new ToyotaCar();
      default:
        throw new Error("Invalid car type");
    }
  }
}

```

```
const main = () => {
  const hondaCar = CarFactory.buildCar(CarType.HONDA);
  hondaCar.view();

  const nexusCar = CarFactory.buildCar(CarType.NEXUS);
  nexusCar.view();

  const toyotaCar = CarFactory.buildCar(CarType.TOYOTA);
  toyotaCar.view();
};
```

`Về nhược điểm: Vỡi những người chưa có kiến thức về pattern thì có thể cảm thấy khó hiểu. Hoặc nếu như chỉ cần class Factory bị sai thì những nơi khác sử dụng Factory này cũng sẽ bị sai theo`

```typescript
interface ICar {
  view(): void;
}

class HondoCar implements ICar {
  view() {
    console.log("This is a Honda car");
  }
}

class NexusCar implements ICar {
  view() {
    console.log("This is a Nexus car");
  }
}

class ToyotaCar implements ICar {
  view() {
    console.log("This is a Toyota car");
  }
}

enum CarType {
  HONDA,
  NEXUS,
  TOYOTA,
}

class CarFactory {
  static buildCar(type: CarType) {
    switch (type) {
      case CarType.HONDA:
        return new HondoCar();
      case CarType.NEXUS:
        return new NexusCar();
      case CarType.TOYOTA:
        return new ToyotaCar();
      default:
        throw new Error("Invalid car type");
    }
  }
}

const main = () => {
  const hondaCar = CarFactory.buildCar(CarType.HONDA);
  hondaCar.view();

  const nexusCar = CarFactory.buildCar(CarType.NEXUS);
  nexusCar.view();

  const toyotaCar = CarFactory.buildCar(CarType.TOYOTA);
  toyotaCar.view();
};
main();
```
