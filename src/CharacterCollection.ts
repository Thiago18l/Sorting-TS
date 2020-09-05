import { Sorter } from "./Sorter";
export class CharactersCollection extends Sorter{
    private data: string;

    constructor (data: string) {
        super();
        this.data = data;
    }
    get length(): number {
        return this.data.length;
    }
    compare(left: number, right: number): boolean {
        return (this.data[left].toLowerCase() > this.data[right].toLowerCase())
    }
    swap(left: number, right: number): void {
        const characters = this.data.split("");
        const temp = characters[left];
        characters[left] = characters[right];
        characters[right] = temp;
        
        this.data = characters.join('');
    }
}   