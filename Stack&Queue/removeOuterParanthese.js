/*
Problem Statement:
A valid parentheses string is either empty "", "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.

For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.
A valid parentheses string s is primitive if it is nonempty, and there does not exist a way to split it into s = A + B, with A and B nonempty valid parentheses strings.


Given a valid parentheses string s, consider its primitive decomposition: s = P1 + P2 + ... + Pk, where Pi are primitive valid parentheses strings.


Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s.
*/

let str = "(()(()))";

function removeOuterParanthese(s) {
    let ans = "";
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push[s[i]];
            ans += ((stack.length > 1) ? s[i] : '');
        } else {
            ans += ((stack.length > 1) ? s[i] : '');
            stack.pop();
        }
    }

    return ans;
}

console.log("Result :", removeOuterParanthese(str));

/*
Time Complexity:
Time Complexity = O(n)

Space Complexity:
Space Complexity = O(n)
*/


/// Second Approach without stack 

function removeOuterParanthese2(s) {
    let level = 0;
    let ans = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            ++level;
            ans += level > 1 ? s[i] : "";
        }else{
            ans += level>1 ? s[i] :"";
            --level;
        }
    }

    return ans;
}

console.log("Result2 ", removeOuterParanthese2(str));

/*
Time Complexity:
Time Complexity = O(n)

Space Complexity:
Space Complexity = O(1)
*/