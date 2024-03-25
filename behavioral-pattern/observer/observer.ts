// Observer interface
interface Observer {
  update: (data: number) => void;
}

// Subject interface
interface Subject {
  subscribe: (observer: Observer) => void;
  unsubscribe: (observer: Observer) => void;
  notifyObservers: () => void;
}

class ConcreteSubject implements Subject {
  private observers: Observer[] = [];
  private state: number = 0;

  subscribe(observer: Observer): void {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this.state);
    }
  }

  changeState(state: number): void {
    this.state = state;
    this.notifyObservers();
  }
}

class ConcreteObserver implements Observer {
  private id: number;

  constructor(id: number) {
    this.id = id;
  }

  update(data: number): void {
    console.log(`[Observer ${this.id}] received update with data: ${data} !`);
  }
}

const main = () => {
  const subject = new ConcreteSubject();
  const observer1 = new ConcreteObserver(1);
  const observer2 = new ConcreteObserver(2);

  subject.subscribe(observer1);
  subject.subscribe(observer2);

  subject.changeState(10);

  subject.unsubscribe(observer2);

  subject.changeState(20);
};
main();
