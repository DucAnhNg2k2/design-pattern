#### Abstract Factory pattern là một super-factory, dùng để tạo ra các factory khác
#### Pattern này sẽ tạo ra các factory là class con của nó và các factory này được tạo ra giống như cách mà factory tạo ra các sub-class.

- AbstractFactory: Khai báo dạng interface hoặc abstract class chứa các phương thức để tạo ra các đối tượng factory.
- ConcreteFactory: Xây dựng, cài đặt các phương thức tạo các đối tượng cụ thể của từng factory.
- AbstractProduct: Khai báo dạng interface hoặc abstract class để định nghĩa đối tượng abstract.
- Product: Cài đặt của các đối tượng cụ thể, cài đặt các phương thức được quy định tại AbstractProduct.
- Client: là đối tượng sử dụng AbstractFactory và các AbstractProduct.
 
Design: 

![](842436c5-bd66-4d15-a18d-f92d99f76739.webp)


``=> Một công ty đồ nội thất chuyên sản xuất ghế (Chair): ghế nhựa (PlasticChair) và ghế gỗ (WoodChair). => Với tình hình kinh doanh ngày càng thuận lợi nên công ty quyết định mở rộng thêm sản xuất bàn (Table). Với lợi thế là đã có kinh nghiệm từ sản xuất ghế nên công ty vẫn giữ chất liệu là nhựa (PlasticTable) và gỗ (WoodTable) cho sản xuất bàn. Tuy nhiên, quy trình sản xuất ghế/bàn theo từng chất liệu (MaterialType) là khác nhau. Nên công ty tách ra là nhà máy (Factory): 1 cho sản xuất vật liệu bằng nhựa (PlasticFactory), 1 cho sản xuất vật liệu bằng gỗ (WoodFactory), nhưng cả 2 đều có thể sản xuất ghế và bàn (FunitureAbstractFactory). Khi khách hàng cần mua một món đồ nào, khách hàng (Client) chỉ cần đến cửa hàng để mua (FunitureFactory). Khi đó ứng với từng hàng hóa và vật liệu sẽ được chuyển về phân xưởng tương ứng để sản xuất (createXXX) ra bàn (Table) và ghế (Chair).``


- Các lợi ích của Factory Pattern cũng tương tự như Factory Method Pattern như: cung cấp hướng tiếp cận với Interface thay thì các implement, che giấu sự phức tạp của việc khởi tạo các đối tượng với người dùng (client), độc lập giữa việc khởi tạo đối tượng và hệ thống sử dụng, …
- Giúp tránh được việc sử dụng điều kiện logic bên trong Factory Pattern. Khi một Factory Method lớn (có quá nhiều sử lý if-else hay switch-case), chúng ta nên sử dụng theo mô hình Abstract Factory để dễ quản lý hơn (cách phân chia có thể là gom nhóm các sub-class cùng loại vào một Factory).
- Abstract Factory Pattern là factory của các factory, có thể dễ dạng mở rộng để chứa thêm các factory và các sub-class khác.
- Dễ dàng xây dựng một hệ thống đóng gói (encapsulate): sử dụng được với nhiều nhóm đối tượng (factory) và tạo nhiều product khác nhau.
  
```typescript
enum MaterialType {
  WOOD,
  PLASTIC,
}

// Supper Factory
class FurnitureFactory {
  public static getFactory(
    materialType: MaterialType
  ): IFurnitureAbstractFactory {
    switch (materialType) {
      case MaterialType.WOOD:
        return new WoodFactory();
      case MaterialType.PLASTIC:
        return new PlasticFactory();
      default:
        throw new Error("Invalid Material Type");
    }
  }
}

// Abstract Factory
interface IFurnitureAbstractFactory {
  getFurniture(furnitureType: FurnitureType): Chair | Table;
}

// Concrete Factory
enum FurnitureType {
  CHAIR,
  TABLE,
}

class WoodFactory implements IFurnitureAbstractFactory {
  getFurniture(furnitureType: FurnitureType): Chair | Table {
    switch (furnitureType) {
      case FurnitureType.CHAIR:
        return new WoodChair();
      case FurnitureType.TABLE:
        return new WoodTable();
      default:
        throw new Error("Invalid Furniture Type");
    }
  }
}

class PlasticFactory implements IFurnitureAbstractFactory {
  getFurniture(furnitureType: FurnitureType): Chair | Table {
    switch (furnitureType) {
      case FurnitureType.CHAIR:
        return new PlasticChair();
      case FurnitureType.TABLE:
        return new PlasticTable();
      default:
        throw new Error("Invalid Furniture Type");
    }
  }
}

// Abstract Product
interface Chair {
  sitOn(): void;
}

interface Table {
  putOn(item: string): void;
}

// Concrete Product
class WoodChair implements Chair {
  sitOn(): void {
    console.log("Sitting on a wooden chair");
  }
}

class WoodTable implements Table {
  putOn(item: string): void {
    console.log(`Putting ${item} on a wooden table`);
  }
}

class PlasticChair implements Chair {
  sitOn(): void {
    console.log("Sitting on a plastic chair");
  }
}

class PlasticTable implements Table {
  putOn(item: string): void {
    console.log(`Putting ${item} on a plastic table`);
  }
}
// Usage example
const woodFactory = FurnitureFactory.getFactory(MaterialType.WOOD);
const chair = woodFactory.getFurniture(FurnitureType.CHAIR) as Chair;
chair.sitOn();

const plasticFactory = FurnitureFactory.getFactory(MaterialType.PLASTIC);
const table = plasticFactory.getFurniture(FurnitureType.TABLE) as Table;
table.putOn("book");

```