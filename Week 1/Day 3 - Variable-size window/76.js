// 76. Minimum Window Substring
// https://leetcode.com/problems/minimum-window-substring/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let l = 0, r = 0;
    let minLen = Infinity, start = 0;
    const map = new Map();
    let count = t.length;

    // Initialize frequency map for t
    for (let char of t) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    while (r < s.length) {
        if (map.has(s[r])) {
            map.set(s[r], map.get(s[r]) - 1);
            if (map.get(s[r]) >= 0) count--;
        }

        // When all characters are matched, try to shrink the window
        while (count === 0) {
            if (r - l + 1 < minLen) {
                minLen = r - l + 1;
                start = l;
            }

            if (map.has(s[l])) {
                map.set(s[l], map.get(s[l]) + 1);
                if (map.get(s[l]) > 0) count++;
            }
            l++;
        }

        r++;
    }

    return minLen === Infinity ? "" : s.substring(start, start + minLen);
};


console.log(minWindow("ADOBECODEBANC", "ABC"));

// TC O(n)
// SC O(1)