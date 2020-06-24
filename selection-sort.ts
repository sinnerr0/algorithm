import RandomGenerator from './random-generator';

export default class SelectionSort {
  private array: Uint8Array;

  constructor() {
    console.info('## SelectionSort');
    this.array = new Uint8Array(20);
    RandomGenerator.number(this.array);
  }

  sort(array = this.array, n = this.array.length) {
    console.debug(`\tstart\t${this.array}`);
    for (let last = n; 0 < last; last--) {
      let maxIndex = 0;
      for (let i = 1, j = last - 1; i < j; i++) {
        if (array[maxIndex] < array[i]) {
          maxIndex = i;
        }
      }
      if (array[maxIndex] > array[last - 1]) {
        let tmp = array[last - 1];
        array[last - 1] = array[maxIndex];
        array[maxIndex] = tmp;
        console.debug(`${n - last}\tswap\t${this.array}`);
      } else {
        console.debug(`${n - last}\tpass\t${this.array}`);
      }
    }
  }
}
