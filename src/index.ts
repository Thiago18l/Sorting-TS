class Sorter {
    private collection: number[];

    constructor(collection: number[]) {
        this.collection = collection;
    }
    sort(): void {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.collection[j] > this.collection[j + 1]) {
                    const temp = this.collection[j];
                    this.collection[j] = this.collection[j + 1];
                    this.collection[j + 1] = temp;
                }
            }
        }
    }
    public getCollection () {
        return this.collection;
    }
}

const sorting = new Sorter([1, 4, 3, 6]);
sorting.sort();
console.log(sorting.getCollection());