// 1423. Maximum Points You Can Obtain from Cards
// https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards

// arr = [6, 2, 3, 4, 7, 2, 1, 7, 1], k = 4

// condition is you can either picks cards from start or end not from middle and k is no. of cards you can pick

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxPoints = function (nums, k) {
    let lSum = 0;
    let rSum = 0;
    let maxSum = 0;
    const n = nums.length;

    for (let i = 0; i < k; i++) {
        lSum += nums[i]; 
    }

    maxSum = lSum;
    let rIndex = n - 1;
    for (let i = k - 1; i >=0; i--) {
        lSum -= nums[i];
        rSum += nums[rIndex];
        rIndex--;
        maxSum = Math.max(maxSum, lSum + rSum);
    }

    return maxSum;
}

console.log(maxPoints([6, 2, 3, 4, 7, 2, 1, 7, 1], 4));

// TC = O(2k)
// SC = O(1)