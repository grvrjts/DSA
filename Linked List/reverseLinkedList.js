class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

let node1 = new Node(10);
let node2 = new Node(20);
let node3 = new Node(30);
node1.next = node2;
node2.next = node3;


class MyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
}

let list = new MyLinkedList();
list.head = node1;
list.size = 3;

MyLinkedList.prototype.reverse = function () {
    let prev = null;
    let current = this.head;
    while (current) {
        let temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
    }
    this.head = prev;
    return this.head;
}
MyLinkedList.prototype.printList = function() {
    let current = this.head;
    let result = "";

    while (current) {
        result += current.value + " -> ";
        current = current.next; // Move to the next node
    }

    console.log(result + "null");
}

console.log("Original list:");
list.printList();
list.reverse();
console.log("Reversed list:");
list.printList();