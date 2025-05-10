// 3. Longest Substring Without Repeating

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let l = 0, r = 0;
    let maxLen = 0;
    const n = s.length;
    const map = new Map();

    while (r < n) {
        if (map.has(s[r])) {
            if (l <= map.get(s[r])) {
                l = map.get(s[r]) + 1;
            }
        }
        maxLen = Math.max(maxLen, r - l + 1);
        map.set(s[r], r);
        r++;
    }

    return maxLen;
};

console.log(lengthOfLongestSubstring("abcabcbb"));

// TC = O(n)
// SC = O(n) worst case O(26)