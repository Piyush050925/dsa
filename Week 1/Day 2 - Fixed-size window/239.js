// 239. Sliding Window Maximum
// https://leetcode.com/problems/sliding-window-maximum

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const deque = []; // will store indices
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        // Remove indices out of window
        if (deque.length && deque[0] < i - k + 1) {
            deque.shift();
        }

        // Remove indices of all elements smaller than current
        while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }

        deque.push(i);

        // Append max in window to result
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
};
