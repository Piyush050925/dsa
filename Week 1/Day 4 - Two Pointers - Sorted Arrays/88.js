// 88. Merge Sorted Array
// https://leetcode.com/problems/merge-sorted-array

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let i = 0;
    let j = 0;
    let k = 0;
    const res = [];

    while (i < m && j < n) {
        if (nums1[i] < nums2[j]) {
            res[k] = nums1[i];
            i++;
        } else {
            res[k] = nums2[j];
            j++;
        }
        k++;
    }

    while (i < m) {
        res[k] = nums1[i];
        i++;
        k++;
    }

    while (j < n) {
        res[k] = nums2[j];
        j++;
        k++;
    }


    for (let k in res) {
        nums1[k] = res[k];
    }
};

console.log(merge([1, 2,3, 0 ,0 ,0], 3, [2, 5, 6], 3));
