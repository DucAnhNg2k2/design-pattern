interface SortStrategy {
  sort(data: number[]): number[];
}

class QuickSort implements SortStrategy {
  constructor() {}
  sort(data: number[]): number[] {
    console.log("QuickSort", data);
    return data;
  }
}
class MergeSort implements SortStrategy {
  constructor() {}
  sort(data: number[]): number[] {
    console.log("MergeSort", data);
    return data;
  }
}
class BubbleSort implements SortStrategy {
  constructor() {}
  sort(data: number[]): number[] {
    console.log("BubbleSort", data);
    return data;
  }
}

class SortedArray {
  private data: number[];
  private strategy: SortStrategy | null = null;

  constructor() {
    this.data = [];
    this.strategy = null;
  }

  public setStrategy(strategy: SortStrategy): void {
    this.strategy = strategy;
  }
  public addData(data: number): void {
    this.data.push(data);
  }
  public sort(): number[] {
    if (!this.strategy) {
      throw new Error("Strategy is not set");
    }
    return this.strategy.sort(this.data);
  }
}

const main = () => {
  const sortedArray = new SortedArray();
  sortedArray.addData(1);
  sortedArray.addData(2);

  sortedArray.setStrategy(new QuickSort());
  sortedArray.addData(3);
  sortedArray.sort();

  sortedArray.setStrategy(new MergeSort());
  sortedArray.addData(4);
  sortedArray.sort();

  sortedArray.setStrategy(new BubbleSort());
  sortedArray.addData(5);
  sortedArray.sort();
};
main();
