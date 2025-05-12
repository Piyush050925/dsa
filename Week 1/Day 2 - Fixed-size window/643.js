// 643. Max Average Subarray I
// https://leetcode.com/problems/maximum-average-subarray-i

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {

    let l = 0, r = k;
    let sum = 0, maxS = 0;

    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }
    maxS = sum;

    while (r < nums.length) {
        sum += nums[r];
        sum -= nums[l];
        l++;
        r++;
        maxS = Math.max(sum, maxS);
    }

    return maxS / k;
};

console.log(findMaxAverage([1,12,-5,-6,50,3], 4))