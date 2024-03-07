import { ICar } from "./ICar";

export class NexusCar implements ICar {
  view() {
    console.log("This is a Nexus car");
  }
}
