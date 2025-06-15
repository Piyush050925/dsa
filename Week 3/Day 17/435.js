// 435. Non-overlapping
// https://leetcode.com/problems/non-overlapping-intervals

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {

    intervals.sort((a, b) => a[1] - b[1]); 
    let count = 0;
    let prevEnd = intervals[0][1];

    for (let i = 1; i < intervals.length; i++) { 
        let currStart = intervals[i][0];

        if (currStart < prevEnd) {
            count++;
        } else {
            prevEnd = intervals[i][1]; 
        }
    }

    return count;
};

// TC = O(n log n)
// SC = O(1)