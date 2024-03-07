import { HondoCar } from "./HondaCar";
import { NexusCar } from "./NexusCar";
import { ToyotaCar } from "./ToyotaCar";

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
