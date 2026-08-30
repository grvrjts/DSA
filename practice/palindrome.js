function isPalindrome(n) {
    let actualN = n;
    let rev = 0;
    while (n > 0) {
        let n1 = n % 10;
        rev = rev * 10 + n1;
        n = Math.floor(n / 10);
    }
    
    console.log("Actual and reversed :", actualN, rev)

    return rev === actualN;
}

let n = 12321;
console.log(isPalindrome(n))