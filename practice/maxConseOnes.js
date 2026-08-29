let arr = [1, 1, 0, 0, 1, 1, 1];
function maxConseOnes(arr) {
    let currentMax = 0;
    let maxConsecutiveOnes = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            currentMax++;
        } else {
            maxConsecutiveOnes = Math.max(maxConsecutiveOnes, currentMax);
            currentMax = 0;
        }
    }

    return Math.max(maxConsecutiveOnes, currentMax);
}
console.log("max consecutive ones:", maxConseOnes(arr));

