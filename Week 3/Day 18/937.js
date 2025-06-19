// 937. Reorder Data in Log Files
// https://leetcode.com/problems/reorder-data-in-log-files/

/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = (logs) => {
    const body = s => s.slice(s.indexOf(' ') + 1); // get the body after identifier
    const isNum = c => /\d/.test(c);

    // if body same then compare identifier
    const compare = (a, b) => {
        const n = body(a).localeCompare(body(b));
        if (n !== 0) return n;
        return a.localeCompare(b);
    };

    const digitLogs = [];
    const letterLogs = [];
    for (const log of logs) {
        if (isNum(body(log))) digitLogs.push(log);
        else letterLogs.push(log);
    }
    return [...letterLogs.sort(compare), ...digitLogs];
};

// O(n)
// O(1)