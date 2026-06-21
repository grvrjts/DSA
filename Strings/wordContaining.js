/**Problem Statement:
You are given a 0-indexed array of strings words and a character x. Return an array of indices representing the words that contain the character x.

The returned array can be in any order. **/

let arr = ["gaurav", "saurav", "sonu", "kaali", "driti"];
let letter = "a";


function findletterIndex(words, letter) {
    let result = [];
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if (words[i][j] == letter) {
                result.push(i)
                break;
            }
        }
    }
    return result
}

console.log("Result : ", findletterIndex(arr, letter))

/**
Time and Space Complexity:
Time Complexity: O(m × n) — where m is the number of words, and n is the max length of a word.
Space Complexity: O(1) — constant extra space (excluding result array).**/