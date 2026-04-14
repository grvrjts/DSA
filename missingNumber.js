let nums = [0, 4, 1, 2, 3, 5, 6, 7];
function missingNumber(nums) {
    let n = nums.length;
    let expectedSum = n * (n + 1) / 2;
    let actualSum = 0;
    for (let i = 0; i < n; i++) {
        actualSum += nums[i];
    }
    return expectedSum - actualSum;
}

const result = missingNumber(nums);
console.log(result);