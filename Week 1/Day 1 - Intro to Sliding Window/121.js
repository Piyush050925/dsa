// 121. Best Time to Buy and Sell Stock
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock

// Solution 1 it will work but Time Exceeeded will be there

// Brute Force Approach
// Start with first loop and in second loop check max difference

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxP = 0;

    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            maxP = Math.max(maxP, prices[j] - prices[i]);
        }
    }

    return maxP;
};

console.log("---- Solution 1 ----");
console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));

// TC = O(n^2)
// SC = O(1)

// Solution 2 Better/Best Approach

// we are keeping two pointers here one will find out minimum value
// other will find out max profit  

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfitB = function(prices) {
    let maxP = 0;
    let minB = Infinity;

    for (let i = 0; i < prices.length; i++) {
        minB = Math.min (minB, prices[i]);
        maxP = Math.max(maxP, prices[i] - minB);
    }

    return maxP;
};

console.log("---- Solution 2 ----");
console.log(maxProfitB([7,1,5,3,6,4]));
console.log(maxProfitB([7,6,4,3,1]));

// TC = O(n)
// SC = O(1)