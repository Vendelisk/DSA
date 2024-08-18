class CustomArray<T> {
  private length: number;
  private data: { [key: number]: T };

  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index: number): T {
    return this.data[index];
  }

  push(item: T): void {
    this.data[this.length] = item;
    this.length++;
  }

  pop(): T {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index: number): T {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  private shiftItems(index: number): void {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}