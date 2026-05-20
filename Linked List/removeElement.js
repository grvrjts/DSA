class Node {
    constructor(value) {
        this.value = value || 0;
        this.next = null;
    }
}
let node1 = new Node(10);
let node2 = new Node(20);
let node3 = new Node(30);
let node4 = new Node(20);
let node5 = new Node(10);



node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = null; // Creates a palindrome in the list

class MyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
}

let list = new MyLinkedList();
list.head = node1;
list.size = 5;




MyLinkedList.prototype.removeElements = function (head, val) {
    let sentinel = new Node(0);
    sentinel.next = head;
    let prev = sentinel;
    while (prev && prev.next) {
        if (prev.next.value === val) {
            prev.next = prev.next.next
        } else {

            prev = prev.next
        }
    }
    return sentinel.next;
}


 const newList = list.removeElements(this.head, 20);
 console.log("New List after removing elements with value 20:", newList);