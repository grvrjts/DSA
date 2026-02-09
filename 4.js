function eligibleToVote(age) {
    if (age < 1) {
        return "Invalid age. Age cannot be negative or zero.";
    } else if (age >= 18) {
        return "You are eligible to vote.";
    } else {
        return "You are not eligible to vote.";
    }
}
let age = 0;
let result = eligibleToVote(age);
console.log(result);