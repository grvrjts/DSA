let arr = [3,2,2,3];
function removeElement(arr, val) {
    let index = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !==val){
            arr[index] = arr[i];
            index++;
        }
    }
    return {    totalUnique: index, uniqueArray: arr.slice(0, index) };
}

console.log(removeElement(arr, 3));