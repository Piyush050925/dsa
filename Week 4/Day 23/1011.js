// 1011. 
// https://leetcode.com/problems/capacity-to-ship-packages-within-d-days

var shipWithinDays = function (weights, days) {
    let left = Math.max(...weights);
    let right = weights.reduce((a, b) => a + b);
    let ans = right;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        let requiredDays = 1;
        let currentLoad = 0;
        for (let w of weights) {
            if (currentLoad + w > mid) {
                requiredDays++;
                currentLoad = 0;
            }
            currentLoad += w;
        }

        if (requiredDays > days) {
            left = mid + 1;
        } else {
            ans = mid;
            right = mid - 1;
        }
    }

    return ans;
};


console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));

// TC = O(log (sum of(wights)) * n) where n is number of weights
// SC = O(1)