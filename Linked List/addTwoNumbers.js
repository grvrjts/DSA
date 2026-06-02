/**
 * Adds two numbers represented by reversed singly-linked lists.
 *
 * Each input list stores a non-negative integer in reverse order,
 * with one digit per node. Return a new linked list representing
 * the sum in the same reversed format.
 *
 * Assumptions:
 * - Input lists are non-empty.
 * - Numbers do not have leading zeros, except for 0 itself.
 *
 * Example:
 * (2 -> 4 -> 3) + (5 -> 6 -> 4) === 7 -> 0 -> 8  // 342 + 465 = 807
 */


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


/*
    Annotated explanation — why modifying `current` updates `dummyHead`:

    - `let dummyHead = new Node(0);`
    - `let current = dummyHead;` // both variables reference the same Node object

    Inside the loop:
        `current.next = new Node(digit);`  -> mutates the object that both `current` and
            `dummyHead` reference, so `dummyHead.next` becomes the new node.
        `current = current.next;` -> reassigns the *variable* `current` to the newly
            created node. This does NOT change the `dummyHead` variable — it still points to
            the original dummy node whose `.next` chain you are building.

    Simple ASCII flow for one iteration:
        (dummyHead:0) --next--> (digitA)
                 ^current (initially)
        after `current = current.next` -> current points to (digitA)

    Final return: `dummyHead.next` returns the head of the constructed list.
*/
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