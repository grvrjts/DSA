function lengthOfLastWord(s){
    s= s.trim();
    s= s.split(" ");
    return s[s.length -1].length;
}
let str = " Fly me to  the moon ";
console.log(lengthOfLastWord(str)); // Output: 5
