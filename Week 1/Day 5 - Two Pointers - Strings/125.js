// 125. Valid Palindrome
// https://leetcode.com/problems/valid-palindrome

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let l = 0, r = s.length - 1;

    while (l < r) {
        while (l < r && !isAlphaNumeric(s[l])) l++;
        while (l < r && !isAlphaNumeric(s[r])) r--;

        if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;
        l++;
        r--;
    }

    return true;
};

function isAlphaNumeric(char) {
    return /[a-z0-9]/i.test(char);
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));

// TC O(n)
// SC O(1)