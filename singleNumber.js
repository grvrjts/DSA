// First Approach. taking extra space.
function singleNumber(nums) {
    let hashMap = {};
    for (let i = 0; i < nums.length; i++) {
        if (!hashMap[nums[i]]) {
            hashMap[nums[i]] = 1;
        } else {
            hashMap[nums[i]]++;
        }

    }
    for (let i = 0; i < nums.length; i++) {
        if (hashMap[nums[i]] == 1) {
            return nums[i];
        }

    }

}

let nums = [2, 2, 1, 4, 4, 5, 5, 1, 3];
const result = singleNumber(nums);
console.log("Result first approach: ",result);

// Second Approach.
function singleNUmber1(nums){
    let xor = 0;
    for(let i =0; i< nums.length; i++){
        xor = nums[i] ^ xor;
    }
    return xor;
}
const result1 = singleNUmber1(nums);
console.log("Result second approach: ", result1);