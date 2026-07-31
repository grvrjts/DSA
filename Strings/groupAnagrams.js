/*
The goal is to group words that are anagrams of each other. An anagram is a word formed by rearranging the letters of another word.
This approach uses a sorted version of each string as a unique key to group anagrams together.
*/

let strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

function groupdAnagrams(strs) {
    let map = {};
    for (let i = 0; i < strs.length; i++) {
        let str = strs[i].split('').sort().join('');
        if (!map[str]) {
            map[str] = [strs[i]];
        } else {
            map[str].push(strs[i])
        }
    }
    return Object.values(map);
}

console.log("Result: ", groupdAnagrams(strs))

/*
Time & Space Complexity
Time Complexity: O(n·k·log k), where n is the number of strings and k is the average length of each string (due to sorting)
Space Complexity: O(n·k), for storing grouped anagrams.
*/