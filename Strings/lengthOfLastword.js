// Problem Statement:
// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is defined as a maximal substring consisting of non-space characters only.

function lengthOfLastWord(s) {
    s = s.trim();
    s = s.split(" ");
    return s[s.length - 1].length;
}

function lengthOfLastWordTwo(s) {
    // trim the string to first reach the last word
    let n = s.length - 1;
    while (n > 0) {
        if (s[n] == " ") {
            n--;
        } else {
            break;
        }
    }
    // count the length of the last word
    let count = 0;
    while (n > 0) {
        if (s[n] !== " ") {
            count++;
            n--;
        } else {
            break;
        }
    }
    return count;
}

function lengthOfLastWordThree(s) {
    // trim the string to first reach the last word
    let n = s.length - 1;
    let count = 0;
    while (n >= 0) {
        if (s[n] !== " ") {
            ++count;
        } else if (count > 0) {
            break;
        }
        --n;
    }
    return count;
}
let str = " Fly me to  the moon ";
console.log(lengthOfLastWord(str)); // Output: 4
console.log(lengthOfLastWordTwo(str)); // Output: 4
console.log(lengthOfLastWordThree(str)); // Output: 4

// Time and Space Complexity:
// - Time Complexity: O(n) — we traverse the string once from the end.
// - Space Complexity: O(1) — only a few variables are used.
