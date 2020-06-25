export default class SelectionSort {
  private array: Uint8Array;

  constructor(array: Uint8Array) {
    this.array = array;
  }

  sort(array = this.array, n = this.array.length) {
    // console.debug(`\tstart\t${this.array}`);
    for (let last = n; 1 < last; last--) {
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
        // console.debug(`\tswap\t${this.array}`);
      } else {
        // console.debug(`\tpass\t${this.array}`);
      }
    }
  }
}
