// 621. Task Scheduler
// https://leetcode.com/problems/task-scheduler/


// Solution 1 Using Map
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    const fMap = new Map();
    const len = tasks.length;

    for (let i = 0; i < len; i++) {
        fMap.set(tasks[i], (fMap.get(tasks[i]) || 0) + 1);
    }

    const freq = Array.from(fMap.values()).sort((a, b) => a - b);
    // console.log(freq);
    const fLen = freq.length;

    const max_val = freq[fLen - 1] - 1;
    let idle_slots = n * max_val;

    for (let i = fLen - 2; i >= 0; i--) {
        idle_slots -= Math.min(max_val, freq[i]);
    }

    return idle_slots > 0 ? idle_slots + len : len;
};

console.log("-----xSolution 1x-----");
console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 3));
console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 2));

// TC = O(n log n)
// SC = O(n)

// Solution 2 Using Object
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval1 = function(tasks, n) {
    const fMap = {};
    const len = tasks.length;

    for (let i = 0; i < len; i++) {
        fMap[tasks[i]] = fMap[tasks[i]] ? fMap[tasks[i]] + 1 : 1;
    }

    const freq = Object.values(fMap).sort((a, b) => a - b);
    // console.log(freq);
    const fLen = freq.length;

    const max_val = freq[fLen - 1] - 1;
    let idle_slots = n * max_val;

    for (let i = fLen - 2; i >= 0; i--) {
        idle_slots -= Math.min(max_val, freq[i]);
    }

    return idle_slots > 0 ? idle_slots + len : len;
};

console.log("-----xSolution 2x-----");
console.log(leastInterval1(["A", "A", "A", "B", "B", "B"], 2));

// TC = O(n log n)
// SC = O(n)