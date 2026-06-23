/*
Problem Statement :
This problem requires finding the most frequently occurring vowel and consonant characters in a string, 
and returning the sum of their frequencies.
*/

let s = 'successes'
function maxfreqSum(s) {
    let map = {};
    for (let i = 0; i < s.length; i++) {
        map[s[i]] = !map[s[i]] ? 1 : ++map[s[i]];
    }
    console.log("Map :", map)
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let maxVowelCount = 0;
    let maxConsonantCount = 0;
    let mapKeys = Object.keys(map);
    for (let i = 0; i < mapKeys.length; i++) {
        if (vowels.includes(mapKeys[i])) {
            maxVowelCount = Math.max(maxVowelCount, map[mapKeys[i]]);
        } else {
            maxConsonantCount = Math.max(maxConsonantCount, map[mapKeys[i]]);
        }
    }
    return maxConsonantCount + maxVowelCount;

}
console.log("Result: ", maxfreqSum(s));

/*
Time & Space Complexity
Time Complexity: O(n), where n = length of the string
Space Complexity: O(k), where k = number of unique characters (at most 26 lowercase letters)
*/