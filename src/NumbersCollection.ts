export class NumbersCollection {
    private data: number[];

    constructor (data: number[]) {
        this.data = data;
    }
    get collection(): number[] {
        return this.data;
    }
    get lenght(): number {
        return this.data.length;
    }
    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex] > this.data[rightIndex];
    }
    swap(leftIndex: number, rightIndex: number): void {
        const temp = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = temp;
    }
}