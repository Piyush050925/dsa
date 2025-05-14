// fruit into basket
// https://leetcode.com/problems/fruit-into-baskets/submissions
// this problem is of k = 2

const fruitBasket = function (arr, k) {
    let l = 0, r = 0, maxLen = 0;
    const map = new Map();

    while (r < arr.length) {
       map.set(arr[r], (map.get(arr[r]) || 0) + 1);

        while  (map.size > k) {
            map.set(arr[l], map.get(arr[l]) - 1);
            if (map.get(arr[l]) === 0) {
                map.delete(arr[l]);
            }
            l++;
        }

        if (map.size <= k) {
            maxLen = Math.max(maxLen, r - l + 1);
        }
        r++;
    }

    return maxLen;
}

console.log('---- Solution 1 ----');
console.log(fruitBasket([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4], 2));

// TC O(2n)
// SC O(1)

const fruitBasket1 = function (arr, k) {
    let l = 0, r = 0, maxLen = 0;
    const map = new Map();

    while (r < arr.length) {
       map.set(arr[r], (map.get(arr[r]) || 0) + 1);

        if  (map.size > k) {
            map.set(arr[l], map.get(arr[l]) - 1);
            if (map.get(arr[l]) === 0) {
                map.delete(arr[l]);
            }
            l++;
        }

        if (map.size <= k) {
            maxLen = Math.max(maxLen, r - l + 1);
        }
        r++;
    }

    return maxLen;
}

console.log('---- Solution 2 ----');
console.log(fruitBasket1([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4], 2));