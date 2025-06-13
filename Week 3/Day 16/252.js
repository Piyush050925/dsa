// 252. Meeting Rooms
// https://leetcode.com/problems/meeting-rooms 
// https://neetcode.io/problems/meeting-schedule check this one


/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

var canAttendMeetings = function (intervals) {

    // first sort the array based on start of the interval
    const sortedIntervals = intervals.sort((a, b) => a.start - b.start);

    // iterate over the sortedArray and try to check failure condition
    for (let i = 1; i < sortedIntervals.length; i++) {
        // if end of previous is greater than start of next means overlapping/conflicting
        if (sortedIntervals[i - 1].end > sortedIntervals[i].start) {
            return false;
        }
    }

    // if it doesn't return false for each interval then return true
    return true;
}

const interval1 = {
    start: 0,
    end: 30
};
const interval2 = {
    start: 5,
    end: 10
};
const interval3 = {
    start: 15,
    end: 20
};

console.log(canAttendMeetings([interval1, interval2, interval3]));

// TC = O(nlog n)
// SC = O(n)