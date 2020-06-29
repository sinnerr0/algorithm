import RandomGenerator from './random-generator';
import SelectionSort from './sort/selection-sort';
import BubbleSort from './sort/bubble-sort';
import InsertionSort from './sort/insertion-sort';
import MergeSort from './sort/merge-sort';

const array = new Uint8Array(200);
RandomGenerator.number(array);

const selectionSort = new SelectionSort(Uint8Array.from(array));
console.time('SelectionSort');
selectionSort.sort();
console.timeEnd('SelectionSort');

const bubbleSort = new BubbleSort(Uint8Array.from(array));
console.time('BubbleSort');
bubbleSort.sort();
console.timeEnd('BubbleSort');

const insertionSort = new InsertionSort(Uint8Array.from(array));
console.time('InsertionSort');
insertionSort.sort();
console.timeEnd('InsertionSort');

const mergeSort = new MergeSort(Uint8Array.from(array));
console.time('MergeSort');
mergeSort.sort();
console.timeEnd('MergeSort');
