// 680. Valid Palindrome II
// https://leetcode.com/problems/valid-palindrome-ii

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    function isPalindrome(str, left, right) {
        while (left < right) {
            if (str[left] !== str[right]) return false;
            left++;
            right--;
        }
        return true;
    }

    let left = 0, right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            // Try skipping one character: either s[left] or s[right]
            return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1);
        }
        left++;
        right--;
    }

    return true;
};

console.log(validPalindrome("abca"));

// TC O(n)
// SC O(1)