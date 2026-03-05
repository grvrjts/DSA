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

let n = -13256;
let digit = countDigits(n);
console.log(digit);