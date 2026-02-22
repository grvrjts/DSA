let arr = [2, 5, 6, 3, 8, 4, 7, 11, 243, 768, 3476,3476, 12, 45, 2323];

function findSecondLargest(arr) {
    if(arr.length < 2 ){
        return null;
    }
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] != firstLargest) {
            secondLargest = arr[i];
        }
    }
return secondLargest;
};


let result = findSecondLargest(arr);
console.log("Second Largest: ", result);
