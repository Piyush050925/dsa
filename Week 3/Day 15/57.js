// 57. Insert Interval
// https://leetcode.com/problems/insert-interval/

var insert = function(intervals, newInterval) {
    const res = [];
    let i = 0;

    // 1. Add intervals that come before the newInterval
    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        res.push(intervals[i]);
        i++;
    }

    // 2. Merge overlapping intervals with newInterval
    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }
    res.push(newInterval);

    // 3. Add the rest of the intervals
    while (i < intervals.length) {
        res.push(intervals[i]);
        i++;
    }

    return res;
};

console.log(insert([[1, 3], [6, 10], [11, 16]], [2, 5]));

// TC = O(n)
// SC = O(n+1) ~ O(n)