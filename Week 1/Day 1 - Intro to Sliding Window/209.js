// 209. Min Size Subarray Sum
// https://leetcode.com/problems/minimum-size-subarray-sum

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let minLen = Infinity;
    let l = 0, r = 0, sum = 0;

    while ( r < nums.length) {
        sum += nums[r];
        while (sum >= target) {
            minLen = Math.min(minLen, r - l + 1);
            sum -= nums[l];
            l++;
        }
        r++;
    }

    return minLen == Infinity ? 0 : minLen;
};

console.log(minSubArrayLen(7, [2,3,1,2,4,3]));