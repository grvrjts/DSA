class Node {
    constructor(value) {
        this.value = value;
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
node5.next = null; 
class MyLinkedListOne {
    constructor() {
        this.headOne = null;
        this.size = 0;
    }
}
class MyLinkedListTwo {
    constructor() {
        this.headTwo = null;
        this.size = 0;
    }
}
let list1 = new MyLinkedListOne();
list1.headOne = node1;
list1.size = 5;
let list2 = new MyLinkedListTwo();
list2.headTwo = node4;
list2.size = 2;

MyLinkedListOne.prototype.getIntersectionNode = function (headOne, headTwo) {
    console.log("Head of List 1:", headOne);
    console.log("Head of List 2:", headTwo);
    let set = new Set();
    let currentOne = headOne;
    while (currentOne) {
        set.add(currentOne);
        currentOne = currentOne.next;
    }
    let currentTwo = headTwo;
    while (currentTwo) {
        if (set.has(currentTwo)) {
            return currentTwo; // Intersection node found
        }
        currentTwo = currentTwo.next;
    }
    return null; // No intersection found
}

let intersectionNode = list1.getIntersectionNode(list1.headOne, list2.headTwo); // node4
console.log("Intersection Node:", intersectionNode);

/**
Time and Space Complexity:
Time Complexity: O(n + m), where n and m are lengths of listA and listB.
Space Complexity: O(m), storing nodes of listB in a set.
 */