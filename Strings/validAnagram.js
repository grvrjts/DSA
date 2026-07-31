/*
This problem checks whether two strings are anagrams of each other. 
Two strings are anagrams if they contain the exact same characters with the same frequency but possibly in a different order.
*/

let str1 = 'nagaram';
let str2 = 'anagram';


function isValidAnagram(str1, str2) {
    const format = str => str.toLowerCase().split('').sort().join('');
    return format(str1) === format(str2);
}


console.log("Result :", isValidAnagram(str1, str2))

// Second approach
function isValidAnagram2(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    let map = {};
    for (let i = 0; i < s.length; i++) {
        if (!map[s[i]]) {
            map[s[i]] = 1;
        } else {
            ++map[s[i]];
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (!map[t[i]] || map[t[i]] < 0) {
            return false;
        } else {
            --map[t[i]];
        }
    }
    return true;
}

console.log("Result2 : ", isValidAnagram2(str1, str2));

/*
Time & Space Complexity
Time Complexity: O(n), where n is the length of the strings
Space Complexity: O(1), since the character set is limited to 26 lowercase letters
*/