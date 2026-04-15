function recursion(num){
    if(num === 0 ) return;
    console.log(num);
    num--;
    recursion(num);
}

recursion(10);