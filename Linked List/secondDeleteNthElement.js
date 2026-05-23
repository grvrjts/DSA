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


MyLinkedList.prototype.deleteNthElement = function (head, n) {
    if (n <= 0) return head; // Invalid n, return original list
    let senitnel = new Node(0); // Create a sentinel node
    senitnel.next = head;
    let first = senitnel;
    let second = senitnel;

    // move first pointer n steps ahead
    for (let i = 0; i < n; i++) {
        first = first.next;
    }
    // move both pointers until first reaches the end
    while (first.next) {
        first = first.next;
        second = second.next;
    }
    second.next = second.next.next; // Remove the nth node from the end
    return senitnel.next; // Return the updated list

}

list.deleteNthElement(list.head, 2); // Deletes the 2nd last element (20 in this case)
console.log(JSON.stringify(list.head)); // Output the updated list

/*
Time and Space Complexity:
- Time Complexity: O(n)
- Space Complexity: O(1)
*/