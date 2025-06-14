// 253. Meeting Rooms II
// https://leetcode.com/problems/meeting-rooms-ii/
// https://neetcode.io/problems/meeting-schedule-ii

/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        intervals.sort((a, b) => a.start - b.start);
        const minHeap = new MinPriorityQueue();
        for (const interval of intervals) {
            if (!minHeap.isEmpty() && minHeap.front() <= interval.start) {
                minHeap.pop();
            }
            minHeap.push(interval.end);
        }
        return minHeap.size();
    }
}

// TC = O(n log n)
// SC = O(n)