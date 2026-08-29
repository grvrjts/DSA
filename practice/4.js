function eligibleToVote(age){
    if(age<1){
        return "Inalid age, Age can't be negative."
    }else if(age >=18){
        return "You are eligble to vote."
    }else{
        return "You are not eligible to vote."
    }

}

let age = 10;
let result = eligibleToVote(age);
console.log(result);