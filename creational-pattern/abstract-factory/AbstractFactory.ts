enum MetirialType {
    WOOD,
    FLASTIC,
}

// Supper Factory
class FurnitureFactory {
    public static getFactory (metirialType: MetirialType): IFurnitureAbstractFactory {
        switch (metirialType) {
            case MetirialType.WOOD:
                return new WoodFactory();
            case MetirialType.FLASTIC:
                return new FlasticFactory();
        }

    }
}

// Abstract Factory
interface IFurnitureAbstractFactory {
    getFuniture: (furnitureType: FurnitureType) => Chair | Table | void
}

// Concrete Factory
enum FurnitureType {
    CHAIR,
    TABLE,
}
class WoodFactory implements IFurnitureAbstractFactory {
    getFuniture(furnitureType: FurnitureType) {
        switch (furnitureType) {
            case FurnitureType.CHAIR:
                return new WoodChair();
            case FurnitureType.TABLE:
                return new WoodTable();
        }
    }
}

// Concrete Factory
class FlasticFactory implements IFurnitureAbstractFactory {
    getFuniture(furnitureType: FurnitureType) {
        switch (furnitureType) {
            case FurnitureType.CHAIR:
                return new FlasticChair();
            case FurnitureType.TABLE:
                return new FlasticTable();
        }
    }
}

// Abstract Product
interface Chair {
}
interface Table {
}

// Concrete Product
class WoodChair implements Chair { }
class WoodTable implements Table { }
class FlasticChair implements Chair { }
class FlasticTable implements Table { }

FurnitureFactory.getFactory(MetirialType.WOOD).getFuniture(FurnitureType.CHAIR);