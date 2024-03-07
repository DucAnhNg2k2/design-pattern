import { ICar } from "./ICar";

export class ToyotaCar implements ICar {
  view() {
    console.log("This is a Toyota car");
  }
}
