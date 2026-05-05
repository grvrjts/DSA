function merge(left, right) {
    let i = 0;
    let j = 0;
    let result = [];
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;

        }
    }
    // Push any remaining elements from either array
    return result.concat(left.slice(i)).concat(right.slice(j));
}


function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = arr.length / 2;
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

let arr = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(arr));