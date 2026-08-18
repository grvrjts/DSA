/*
Problem Statement:
Given a string s containing just the characters '(', ‘)’, ‘{‘, ‘}’, ‘[‘ and ‘]’, determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
Example 1:
Input: s = “()”

Output: true

Example 2:
Input: s = “()[]{}”

Output: true

Example 3:

Input: s = “(]”

Output: false

Example 4:

Input: s = “([])”

Output: true

Example 5:

Input: s = “([)]”

Output: false

Constraints:
1<= s.length <= 104
s consists of parentheses only '()[]{}'.

*/
let str = "[[][][]{}{}()()";

function isValidParanthese(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '[' || s[i] === '{' || s[i] === '(') {
            stack.push(s[i]);
        } else {
            let top = stack.pop();
            if (!top || (top === '[' && s[i] != "]") || (top === '(' && s[i] != ")") || (top === '{' && s[i] != "}")) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log("Result : ", isValidParanthese(str));



// second approach 
function isValid(s) {
    let stack = [];
    let map = {
        "{": "}",
        "[": "]",
        "(": ")"
    }
    for (let i = 0; i < s.length; i++) {
        if (!map[s[i]]) {
            stack.push(s[i])
        } else {
            let top = stack.pop();
            if (!top || (s[i] != map[top])) {
                return false
            }
        }
    }
    return stack.length === 0;

}

console.log("Result 2 :", isValid(str))

/*
Time & Space Complexity:
Time Complexity: O(n)

Space Complexity: O(n)
*/