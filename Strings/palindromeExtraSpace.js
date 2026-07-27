/*
The goal of this problem is to determine whether a given string is a palindrome, 
considering only alphanumeric characters and ignoring cases. 
A palindrome reads the same forward and backward after removing non-alphanumeric
*/

let str = "A man, a plan, a canal: Panama";

function isPalindrome(s) {
    let fileteredString = "";
    let rev = "";
    s = s.toLowerCase();
    for (let i = 0; i < s.length; i++) {
        if (s[i].match(/[a-z0-9]/i)) {
            fileteredString = fileteredString + s[i];
            rev = s[i] + rev;
        }
    }
    return fileteredString === rev;
}
console.log("Result :", isPalindrome(str));

/*
Time & Space Complexity
Time Complexity: O(n), where n is the length of the input string
Space Complexity: O(n), due to additional filtered and reversed strings
*/