// 424. Longest Repeating Character Replacement
// https://leetcode.com/problems/longest-repeating-character-replacement

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let l = 0, maxFreq = 0, maxLen = 0;
    const map = new Map();

    for (let r = 0; r < s.length; r++) {
        map.set(s[r], (map.get(s[r]) || 0) + 1);
        maxFreq = Math.max(maxFreq, map.get(s[r]));

        while ((r - l + 1) - maxFreq > k) {
            map.set(s[l], map.get(s[l]) - 1);
            l++;
        }

        maxLen = Math.max(maxLen, r - l + 1);
    }

    return maxLen;
};


console.log(characterReplacement('AAABABABBC', 2));