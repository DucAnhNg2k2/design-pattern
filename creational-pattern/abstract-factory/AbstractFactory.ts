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
