// 930. Binary Subarrays With Sum
// https://leetcode.com/problems/binary-subarrays-with-sum/

/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    return countSubarrayWithLessThanGoal(nums, goal) - countSubarrayWithLessThanGoal(nums, goal - 1);
};

var countSubarrayWithLessThanGoal = function (nums, goal) {
    let l = 0, r = 0;
    let sum = 0, count = 0;

    if (goal < 0) {
        return 0;
    }

    while (r < nums.length) {
        sum += nums[r];

        while (sum > goal) {
            sum -= nums[l];
            l++;
        }

        count += (r - l + 1);
        r++
    }

    return count;
}

console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 2));

// TC O(N)
// SC O(1)