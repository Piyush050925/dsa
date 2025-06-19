// 452. Min Arrows to Burst Balloons
// https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons

/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    if (!points.length) return 0;
    points.sort((a, b) => a[1] - b[1]);
    let arrows = 1;
    let end = points[0][1];

    for (let i = 1; i < points.length; i++) {
        const [start, finish] = points[i];
        if (start > end) {
            arrows++;
            end = finish;
        }
    }

    return arrows;
};

// TC = O(n log n)
// SC = O(1)