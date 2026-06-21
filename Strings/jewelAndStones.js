/*
Problem Statement:
You’re given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is different from "A". */

let jewels = "aA";
let stones = "aAAAbbbb";

function findjewels(jewels, stones) {
    let jSet = new Set();
    let count = 0;
    for (let i = 0; i < jewels.length; i++) {
        jSet.add(jewels[i]);
    }
    for (let j = 0; j < stones.length; j++) {
        if (jSet.has(stones[j])) {
            ++count;
        }
    }

    return  count;
}

console.log("Result : ", findjewels(jewels, stones));
/*
Time and Space Complexity:
Time Complexity: O(n + m), where n is the length of jewels and m is the length of stones.
Space Complexity: O(1) for storing unique characters from jewels.
*/