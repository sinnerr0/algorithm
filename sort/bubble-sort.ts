export default class BubbleSort {
  private array: Uint8Array;

  constructor(array: Uint8Array) {
    this.array = array;
  }

  sort(array = this.array, n = this.array.length) {
    // console.debug(`\tstart\t${this.array}`);
    for (let last = n, sorted; 1 < last; last--) {
      sorted = true;
      for (let i = 0, j = last - 1; i < j; i++) {
        if (array[i] > array[i + 1]) {
          sorted = false;
          let tmp = array[i + 1];
          array[i + 1] = array[i];
          array[i] = tmp;
          // console.debug(`\tswap\t${this.array}`);
        } else {
          // console.debug(`\tpass\t${this.array}`);
        }
      }
      if (sorted) {
        break;
      }
    }
  }
}
