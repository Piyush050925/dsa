// 1248. Count Number of Nice Subarrays
// https://leetcode.com/problems/count-number-of-nice-subarrays/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    return countSubarrayWithLessThanK(nums, k) - countSubarrayWithLessThanK(nums, k - 1);
};

var countSubarrayWithLessThanK = function (nums, k) {
    let l = 0, r = 0;
    let sum = 0, count = 0;

    if (k < 0) {
        return 0;
    }

    while (r < nums.length) {
        sum += nums[r] % 2;

        while (sum > k) {
            sum -= nums[l] % 2;
            l++;
        }

        count += (r - l + 1);
        r++
    }

    return count;
}

console.log(numberOfSubarrays([1, 1, 2, 1, 1], 3));

// TC O(n)
// SC O(1)