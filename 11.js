function findSecondLargest(arr) {
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        } else if (arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}


let result = findSecondLargest([3, 7, 5, 1, 99, 11, 234, 76,200,201,299, 34, 98, 100]);
console.log("Second Largets Number is: ", result);