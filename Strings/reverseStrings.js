/*
The problem requires reversing the first k characters for every 2k characters in a string.
If there are fewer than k characters left, reverse all of them. If there are between k and 2k 
characters left, reverse the first k and leave the rest as is.
*/ 

let str = "gauravkumarlodhirajput";
let k = 2;
function reverseString(s, k) {
    s = s.split("");
    let n = s.length;
    let mid = Math.floor(k / 2);
    for (let i = 0; i < n; i = i + 2 * k) {
        for (let j = 0; j < mid; j++) {
            let temp = s[i + j];
            s[i + j] = s[i + k - 1 - j];
            s[i + k - 1 - j] = temp;
        }

    }
    return s.join('');
}

console.log("Result:", reverseString(str, k));