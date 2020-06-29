export default class MergeSort {
  private array: Uint8Array;

  constructor(array: Uint8Array) {
    this.array = array;
  }

  sort(array = this.array, p = 0, r = this.array.length) {
    if (r - p > 1) {
      // console.debug(`\tsplit\t${array.slice(p, r)}`);
      let q = Math.floor((p + r) / 2);
      this.sort(array, p, q);
      this.sort(array, q, r);
      this.merge(array, p, q, r);
      // console.debug(`\tmerge\t${array}`);
    }
  }
  merge(array: Uint8Array, p: number, q: number, r: number) {
    let i = p;
    let j = q;
    let t = 0;
    let tmp = new Array(r);
    while (i < q && j < r) {
      if (array[i] < array[j]) {
        tmp[t++] = array[i++];
      } else {
        tmp[t++] = array[j++];
      }
    }
    while (i < q) {
      tmp[t++] = array[i++];
    }
    while (j < r) {
      tmp[t++] = array[j++];
    }
    i = p;
    t = 0;
    while (i < r) {
      array[i++] = tmp[t++];
    }
  }
}
