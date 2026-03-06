function isPalindrome(n) {
    let rev = 0;
    let n1; 
    let actualN = n;
    while (n > 0) {
         n1 = n % 10;
        rev = rev * 10 + n1;
        n = Math.floor(n / 10);
    }
    console.log({rev, actualN})
    if (rev == actualN) return true;
    return false;
}

let n = 12321;
console.log(isPalindrome(n))