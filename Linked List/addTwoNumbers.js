class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);

let node6 = new Node(6);
let node7 = new Node(7);
let node8 = new Node(8);
let node9 = new Node(9);
let node10 = new Node(10);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = null; 
    
node6.next = node7;
node7.next = node8;
node8.next = node9;
node9.next = node10;
node10.next = null;

class MyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
}

let list1 = new MyLinkedList();
list1.head = node1;
list1.size = 5;

let list2 = new MyLinkedList();
list2.head = node6;
list2.size = 5;


MyLinkedList.prototype.addTwoNumbers = function (l1, l2) {
    let dummyHead = new Node(0);
    let current = dummyHead;
    let carry =0;
    while(l1 || l2 || carry){
        let sum = (!l1 ? 0 :l1.value) + (!l2 ? 0 : l2.value) + carry;
        carry = Math.floor(sum/10);
        let digit = sum % 10;
        current.next = new Node(digit);
        current = current.next;
         l1 = l1 && l1.next;
         l2 = l2 && l2.next;
    }
    return dummyHead.next;
}


const result = list1.addTwoNumbers(list1.head, list2.head);
console.log("Resultant List:", JSON.stringify(result));