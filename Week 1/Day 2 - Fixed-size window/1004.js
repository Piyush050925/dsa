// 1004. Max Consecutive Ones III
// https://leetcode.com/problems/max-consecutive-ones-iii

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let maxLen = 0;
    let l = 0, r = 0, z = 0;

    while (r < nums.length) {
        if(nums[r] == 0) {
            z++;
        }

        while (z > k) {
            if (nums[l] == 0) {
                z--;
            }
            l++;
        }

        if (z <= k) {
            const len = r - l + 1;
            maxLen = Math.max(maxLen, len);
        }
        r++;
    }

    return maxLen;
};

console.log("---- Solution 1 ----");
console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2));

// TC = O(2n)
// SC = O(1)

var longestOnesT = function(nums, k) {
    let maxLen = 0;
    let l = 0, r = 0, z = 0;

    while (r < nums.length) {
        if(nums[r] == 0) {
            z++;
        }

        if (z > k) {
            if (nums[l] == 0) {
                z--;
            }
            l++;
        }

        if (z <= k) {
            const len = r - l + 1;
            maxLen = Math.max(maxLen, len);
        }
        r++;
    }

    return maxLen;
};

console.log("---- Solution 2 ----");
console.log(longestOnesT([1,1,1,0,0,0,1,1,1,1,0], 2));

// TC = O(n)
// SC = O(1)