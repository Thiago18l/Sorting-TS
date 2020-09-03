import { NumbersCollection } from './NumbersCollection';

export class Sorter {
    private collection: NumbersCollection;

    constructor(collection: NumbersCollection) {
        this.collection = collection;
    }
    sort(): void {
        const { lenght } = this.collection;
        for (let i = 0; i < lenght; i++) {
            for (let j = 0; j < lenght - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                   this.collection.swap(j, j + 1);
                }
            }
        }
    }
    get array(): number [] {
        return this.collection.collection;
    }
}