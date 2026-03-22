let arr = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9];
function removeDuplicates(arr) {
    let index = 0;
    for (let i = 1; i < arr.length; i++) {
        if(arr[i] !== arr[index - 1]) {
            arr[index] = arr[i];
            index = index + 1;
        }
    }
    return arr;   
}

const uniqueArr = removeDuplicates(arr);
console.log(uniqueArr);

// Another way 
function removeDuplicatesTwo(arr) {
    let index = 0;
    for (let i = 1; i < arr.length; i++) {
        if(arr[i] > arr[index]) {
            index = index + 1;
            arr[index] = arr[i];
        }
    }
    return{ totalUnique: index + 1, uniqueArray: arr.slice(0, index + 1) };
}

const uniqueArrTwo  = removeDuplicatesTwo(arr);
console.log("Second approach:",uniqueArrTwo);