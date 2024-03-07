import { ICar } from "./ICar";

export class HondoCar implements ICar {
  view() {
    console.log("This is a Honda car");
  }
}
