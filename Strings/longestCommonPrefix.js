/*
This problem focuses on finding the longest common prefix string shared among an array of strings.
If no common prefix exists, the result should be an empty string.
*/


let strs = ['flower', 'flow', 'flight'];

function findLongestPrefix(strs) {
    let x = 0;
    while (x < strs[0].length) {
        let char = strs[0][x];
        for (let i = 1; i < strs.length; i++) {
         if(! char == strs[i][x] || x == strs[i].length){
            return strs[0].substring(0,x);
         }
        }
        ++x;
    }
    return strs[0]
}

console.log("Result :", findLongestPrefix(strs))

/*
Time & Space Complexity
Time Complexity: O(n·m), where n is the number of strings and m is the length of the shortest string
Space Complexity: O(1), as no extra space is used apart from variables
*/