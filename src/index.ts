import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from "./CharacterCollection";

const array = new NumbersCollection([1, 2, 4, 5, 8, 2, 3]);
const char = new CharactersCollection("Thiago");
const sorting = new Sorter(char);
sorting.sort();
console.log(sorting);