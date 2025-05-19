// 167. Two Sum II

/**
 * @param {number[]} numbers - Sorted array of integers
 * @param {number} target - Target sum
 * @return {number[]} - 1-based indices of the two numbers that add up to target
 */
var twoSum = function(numbers, target) {
    let l = 0, r = numbers.length - 1;

    while (l < r) {
        let currSum = numbers[l] + numbers[r];

        if (currSum === target) {
            return [l + 1, r + 1];
        } else if (currSum < target) {
            l++;
        } else {
            r--;
        }
    }

    return []; // if no solution found
};

console.log(twoSum([[2,7,11,15]], 9));

// TC O(n)
// SC O(1)