import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from "./CharacterCollection";
import { LinkedList } from './LinkedList';

const array = new NumbersCollection([1, 2, 4, 5, 8, 2, 3]);
const char = new CharactersCollection("Thiago");
const linkedList = new LinkedList();

array.sort();
console.log(array)

char.sort();
console.log(char)

linkedList.add(100);
linkedList.add(3);
linkedList.add(-2);
linkedList.add(-10);

linkedList.sort();
linkedList.print();
