class MyHashSet {
  private set: number[];

  constructor() {
    this.set = [];
  }

  add(key: number): void {
    if (!this.set.includes(key)) {
      this.set.push(key);
    }
  }

  remove(key: number): void {
    this.set = this.set.filter((c) => c !== key);
  }

  contains(key: number): boolean {
    return this.set.includes(key);
  }
}
