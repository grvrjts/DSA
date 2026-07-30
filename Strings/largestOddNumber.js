/*
The task is to find the largest-valued odd number that can be formed from a given numeric string by removing trailing even digits. 
The number must be a substring starting from index 0 to some valid index.
*/

function largestOddNumber(s) {
    let n = s.length - 1;
    while(n>0){
        if(Number(s[n] )% 2 ==1){
            return s.substring(0, n+1);
        }
        --n;
    }
    return ""
}
let strNum = "123232128";
console.log("Result : ", largestOddNumber(strNum))     

/*
Time Complexity: O(n), where n is the length of the string
Space Complexity: O(1), no extra space used
*/