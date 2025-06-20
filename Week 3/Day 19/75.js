// 75. Sort Colors
// https://leetcode.com/problems/sort-colors

// Solution 1: maintain counter
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let zeros = 0;
    let ones = 0;

    for (let i of nums) {
        if (i == 0) {
            zeros++;
        } else if (i == 1) {
            ones++;
        }
    }

    for (let i = 0; i < zeros; i++) {
        nums[i] = 0;
    }

    for (let i = zeros; i < zeros + ones; i++) {
        nums[i] = 1;
    }

    for (let i = zeros + ones; i < nums.length; i++) {
        nums[i] = 2;
    }
};

const nums = [2,0,2,1,1,0,1];
console.log(`Solution 1: Maintain Counter`);
console.log(`Before Sorting nums = [${nums}]`);
sortColors(nums);
console.log(`After Sorting nums = [${nums}]`);
console.log(`-------------------`);

// TC = O(n)
// SC = O(1)


// Solution 2: three pointer swap

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors1 = function (nums) {
    let left = 0;
    let mid = 0;
    let right = nums.length - 1;

    while (mid <= right) {
        if (nums[mid] == 2) {
            [nums[mid], nums[right]] = swap(nums[mid], nums[right]);
            right--;
        } else if (nums[mid] == 0) {
            [nums[mid], nums[left]] = swap(nums[mid], nums[left]);
            mid++;
            left++;
        } else {
            mid++;
        }
    }
};

var swap = function (x, y) {
    const temp = x;
    x = y;
    y = temp;
    return [x, y];
}

const nums1 = [2,0,2,1,1,0,1];
console.log(`Solution 2: Three Pointer Swap`);
console.log(`Before Sorting nums1 = [${nums1}]`);
sortColors1(nums1);
console.log(`After Sorting nums1 = [${nums1}]`);

// TC = O(n)
// SC = O(1)
