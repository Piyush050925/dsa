// 875. Koko Eating Bananas
// https://leetcode.com/problems/koko-eating-bananas/

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
    let left = 1;
    let right = Math.max(...piles);
    let res = Infinity;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let hr = 0;
        for (let i = 0; i < piles.length; i++) {
            hr += Math.ceil(piles[i] / mid);
        }
        if (hr <= h) {
            res = Math.min(res, mid);
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return res;
};


console.log(minEatingSpeed([3, 6, 7, 11], 8));

// TC = O(log (max of(piles)) * n) where n is length of piles
// SC = O(1)