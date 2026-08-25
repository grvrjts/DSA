/*

*/

let tokens = ["2", "1", "+", "3", "*"];
function evaluateRPN(tokens) {
    let stack = [];
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] == "+" || tokens[i] == "*" || tokens[i] == "-" || tokens[i] == "/") {
            let operator = tokens[i];
            let lastNumber = stack.pop();
            let secondLastNumber = stack.pop();
            let result = eval(`${secondLastNumber} ${operator} ${lastNumber}`);
            stack.push(result);
        } else {
            stack.push(tokens[i]);
        }
    }
    return Number(stack.pop());
}

console.log("Result : ", evaluateRPN(tokens));

/*

*/