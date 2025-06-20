// 347. Top K Frequent Elements
// https://leetcode.com/problems/top-k-frequent-elements

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const freqObj = {}; // key: freq
    const mapper = []; // freq:[[num1, num2], [], []]
    const res = [];
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        freqObj[nums[i]] = freqObj[nums[i]] ? freqObj[nums[i]] + 1 : 1;
    }

    for (let i in freqObj) {
        if (mapper[freqObj[i]]) {
            mapper[freqObj[i]].push(Number(i))
        } else {
            mapper[freqObj[i]] = [Number(i)];
        }
    }

    for (let j = mapper.length - 1; j >= 0; j--) {
        if (k != count && mapper[j]) {
            res.push(...mapper[j]);
            count++;
        }
    }

    return res.slice(0, k);
};

console.log(topKFrequent([4,1,-1,2,-1,2,3], 2));

// TC = O(n)
// SC = O(n)