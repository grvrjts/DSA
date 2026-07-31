/*
Isomorphic Strings
Two strings s and t are isomorphic if the characters in s can be replaced to get t, maintaining a one-to-one mapping between the characters.
No two characters may map to the same character but a character may map to itself.
*/

let s = 'paper';
let t = 'title';

function isIsomorphic(s, t) {
    let mapStoT = {};
    let mapTtoS = {};

    for (let i = 0; i < s.length; i++) {
        if (!mapStoT[s[i]] && !mapTtoS[t[i]]) {
            mapStoT[s[i]] = t[i];
            mapTtoS[t[i]] = s[i];
        } else if (mapStoT[s[i]] !== t[i] || mapTtoS[t[i]] !== s[i]) {
            return false;
        }
    }
    return true;
}


const result = isIsomorphic(s, t);
console.log(result)

/*
Time & Space Complexity
Time Complexity: O(n), where n is the length of the strings
Space Complexity: O(1), as the mappings are bounded by character set size
*/