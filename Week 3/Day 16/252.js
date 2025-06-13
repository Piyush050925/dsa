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

class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
}

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

console.log('----- Example 1 -----');
const interval1 = new Interval(0, 30);
const interval2 = new Interval(5, 10);
const interval3 = new Interval(15, 20);

console.log(interval1, interval2, interval3);
console.log(canAttendMeetings([interval1, interval2, interval3]));

console.log('----- Example 2 -----');
const interval11 = new Interval(0, 3);
const interval21 = new Interval(5, 10);
const interval31 = new Interval(15, 20);

console.log(interval11, interval21, interval31)
console.log(canAttendMeetings([interval11, interval21, interval31]));

console.log('----- Example 3 -----');
const interval12 = new Interval(0, 4);
const interval22 = new Interval(10, 20);
const interval32 = new Interval(5, 9);

console.log(interval11, interval21, interval31)
console.log(canAttendMeetings([interval12, interval22, interval32]));

// TC = O(nlog n)
// SC = O(n)