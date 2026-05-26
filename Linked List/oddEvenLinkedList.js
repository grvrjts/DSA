/*
Problem Statement:
Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

The first node is considered odd (1st position), the second is even (2nd position), and so on.
*/
class Node {
    constructor(value) {
        this.value = value || 0;
        this.next = null;
    }
}
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);



node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = null; // End of the sorted linked list

class MyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
}

let list = new MyLinkedList();
list.head = node1;
list.size = 5;

MyLinkedList.prototype.oddEvenList = function (head) {
    if(!head || !head.next) return head; // If the list is empty or has only one node, return the original list
    let odd = head;
    let even = head.next;
    let evenHead = even;
    while(odd.next && even.next){
        odd.next = odd.next.next;
        even.next = even.next.next;
        odd = odd.next;
        even = even.next;
    }
    odd.next = evenHead; // Connect the odd list with the even list
    return head; // Return the updated list
}
console.log(JSON.stringify(list.head)); // Output the original list
let oddEvenList = list.oddEvenList(list.head);
console.log(JSON.stringify(oddEvenList)); // Output the list after rearranging odd and even nodes

/*
Time and Space Complexity:
Time Complexity: O(n) — Each node is visited exactly once.
Space Complexity: O(1) — In-place manipulation with constant extra space.
*/