/*This problem focuses on splitting a string into the maximum number of balanced substrings. 
A string is considered balanced if it contains an equal number of ‘L’ and ‘R’ characters. 
The goal is to iterate through the string and count how many such balanced splits can be formed.
*/
let s = "RLRRRLLLRRRLLRLL"
function balanceStringSplit(s) {
    let temp = 0;
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "R") {
            ++temp;
        } else {
            --temp;
        }
        if (temp == 0) {
            ++count;
        }
    }

    return count;

}

console.log("Result :", balanceStringSplit(s));

/*
Time & Space Complexity
Time Complexity: O(n), where n is the length of the string
Space Complexity: O(1), uses constant space
*/