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
