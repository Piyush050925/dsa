// 56. Merge Intervals
// https://leetcode.com/problems/merge-intervals/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    const sortedArr = intervals.sort((a, b) => a[0] - b[0]); // sort on the basis of first element of array i.e. based on start
    const outArr = [sortedArr[0]]; // assign first element

    // iterate over array to check overlapping intervals to merge them
    for (let i = 1; i < sortedArr.length; i++) {
        const lastEnd = outArr[outArr.length - 1][1]; // keep last end i.e. end of last element of outArr

        // check if last end is greater than or equal to new start if true merge them
        if (lastEnd >= sortedArr[i][0]) {
            // make last end = coming/new end
            outArr[outArr.length - 1][1] = Math.max(lastEnd, sortedArr[i][1]);
        } else {
            // if not overlapping just push new element to outArr
            outArr.push(sortedArr[i]);
        }
    }

    // return outArr
    return outArr;
};

console.log(merge([[1, 3], [8, 10], [15, 18], [2, 6]]));


// TC = O(nlog n) + O(n)
// SC = O(n)