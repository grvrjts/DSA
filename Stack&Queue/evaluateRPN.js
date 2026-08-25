/*
Problem Statement:
You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

Evaluate the expression. Return an integer that represents the value of the expression.

Note that:

The valid operators are '+', '-', '*', and '/' .
Each operand may be an integer or another expression.
The division between two integers always truncates toward zero.
There will not be any division by zero.
The input represents a valid arithmetic expression in a reverse polish notation.
The answer and all the intermediate calculations can be represented in a 32-bit integer.
*/

let tokens = ["2", "1", "+", "3", "*"];
function evaluateRPN(tokens) {
    let stack = [];
    for (let i = 0; i < tokens.length; i++) {
        if (["+", "*", "-", "/"].includes(tokens[i])) {
            let operator = tokens[i];
            let lastNumber = stack.pop();
            let secondLastNumber = stack.pop();
            let result = eval(`${secondLastNumber} ${operator} ${lastNumber}`);
            stack.push(Math.trunc(result));
        } else {
            stack.push(tokens[i]);
        }
    }
    return Number(stack.pop());
}

console.log("Result : ", evaluateRPN(tokens));


function evaluateRPN2(tokens) {
    let stack = [];
    let map ={
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => Math.trunc(a / b)
    };
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] in map) {
            let operator = tokens[i];
            let lastNumber = stack.pop();
            let secondLastNumber = stack.pop();
            let result = map[operator](Number(secondLastNumber), Number(lastNumber));
            stack.push(result);
        } else {
            stack.push(tokens[i]);
        }
    }
    return Number(stack.pop());
}
console.log("Result 2 : ", evaluateRPN2(tokens));

/*
Time Complexity:
Time Complexity = O(n)

Space Complexity:
Space Complexity = O(n)
*/