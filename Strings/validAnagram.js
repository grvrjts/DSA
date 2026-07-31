let str1 = 'nagaram';
let str2 = 'anagram';


function isValidAnagram(str1, str2) {
    const format = str=> str.toLowerCase().split('').sort().join('');
    return format(str1) === format(str2);
}


console.log("Result :", isValidAnagram(str1 , str2))

// Second approach
