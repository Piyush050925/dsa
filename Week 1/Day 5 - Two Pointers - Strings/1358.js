// 1358. Number of Substrings Containing All Three Characters
// https://leetcode.com/problems/number-of-substrings-containing-all-three-characters

/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
        let count = 0;
    let left = 0;
    let charCount = { 'a': 0, 'b': 0, 'c': 0 };

    for (let right = 0; right < s.length; right++) {
        charCount[s[right]]++;

        while (charCount['a'] > 0 && charCount['b'] > 0 && charCount['c'] > 0) {
            count += s.length - right;
            charCount[s[left]]--;
            left++;
        }
    }

    return count;
};

console.log(numberOfSubstrings('abcaba'));

// TC Object(2n)
// SC O(1)