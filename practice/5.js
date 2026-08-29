function isEven(num) {
    if (num % 2 == 0) {
        return "The number is even."
    } else {
        return "The number is odd."
    }
}


let num = 31;
let result = isEven(num);
console.log(result);