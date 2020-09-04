class Node {
    value: number;
    next: Node | null = null;
    constructor(value: number) {
        this.value = value;
    }
}

export class LinkedList {
    private head: Node | null = null;
    add(data: number): void {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        let tail = this.head;
        while (tail.next) {
            tail = tail.next;   
        }
        tail.next = node;
    }
    get length(): number {
        if (!this.head) {
            return 0;
        }
        let length = 1;
        let node = this.head;
        while (node.next) {
            length++;
            node = node.next;
        }
        return length;
    }
    at(index: number): Node {
        if (!this.head) {
            throw new Error("Index out of bounds");
        }
        let counter = 0;
        let node: Node | null = this.head;
        while(node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        throw new Error("Index out of bounds");

    }
    compare(left: number, right: number): boolean  {
        if (!this.head) throw new Error("List is empty");
        return ( 
            this.at(left).value > this.at(right).value
        );
    }
    swap(left: number, right: number): void {
        const leftNode: Node | null = this.at(left);
        const rightNode: Node | null = this.at(right);

        const temp = leftNode.value;
        leftNode.value = rightNode.value;
        rightNode.value = temp;
    }
    print(): void {
        if (!this.head) {
            return;
        }
        let node: Node | null = this.head;
        while (node) {
            console.log(node.value)
            node = node.next;
        }
    }
}