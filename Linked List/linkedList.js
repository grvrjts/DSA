class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class MyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
}
let node1 = new Node(5);
let node2 = new Node(10);
let node3 = new Node(15);
node1.next = node2;
node2.next = node3;

let list = new MyLinkedList();
list.head = node1;
list.size = 3;
console.log(list.head);