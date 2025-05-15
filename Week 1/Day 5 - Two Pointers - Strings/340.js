// 340. Longest Substring with At Most K Distinct Characters
// https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/

const longestSubstring = function (s, k) {
    let l = 0, r = 0, maxLen = 0;
    const map = new Map();

    while (r < s.length) {
        map.set(s[r], (map.get(s[r]) || 0) + 1);
        
        if (map.size > k) {
            map.set(s[l], map.get(s[l]) - 1);
            if (map.get(s[l]) == 0) {
                map.delete(s[l]);
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

console.log(longestSubstring("aaabbabacccccdddcdcdcdddcccd", 2));

// TC O(n)
// SC O(1)