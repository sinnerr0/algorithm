export default class InsertionSort {
  private array: Uint8Array;

  constructor(array: Uint8Array) {
    this.array = array;
  }

  sort(array = this.array, n = this.array.length) {
    // console.debug(`\tstart\t${this.array}`);
    for (let i = 1, last = n; i < last; i++) {
      let loc = i;
      for (let j = i - 1; 0 <= j; j--) {
        if (array[j] < array[loc]) {
          // console.debug(`\tpass\t${this.array}`);
          break;
        } else {
          let tmp = array[loc];
          array[loc] = array[j];
          array[j] = tmp;
          loc = j;
          // console.debug(`\tswap\t${this.array}`);
        }
      }
    }
  }
}
