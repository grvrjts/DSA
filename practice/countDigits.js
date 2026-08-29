let n = -123456;
function countDigits(n) {
    if (n == 0) return 1;
    let count = 0;
    n = Math.abs(n);
    while (n > 0) {
        n = Math.floor(n / 10);
        count = count + 1;
    }
    return count;
}

console.log("Result :", countDigits(n))