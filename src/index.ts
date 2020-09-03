import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const array = new NumbersCollection([1, 2, 4, 5, 8, 2, 3]);
const sorting = new Sorter(array);
sorting.sort();
console.log(sorting.array);