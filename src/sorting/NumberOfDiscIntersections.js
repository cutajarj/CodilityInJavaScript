/**
 * This is the solution for Sorting > NumberOfDiscIntersections
 *
 * This is marked as RESPECTABLE difficulty
 */

function solution(A) {
    let len = A.length;
    let discHistory = new Array(len * 2);
    let j = 0;
    for (let i = 0; i < len; i++) {
        discHistory[j++] = new DiscLog(i - A[i], 1);
        discHistory[j++] = new DiscLog(i + A[i], -1);
    }
    discHistory.sort(compare)
    let intersections = 0;
    let activeIntersections = 0;
    for (const log of discHistory) {
        activeIntersections += log.startEnd;
        if (log.startEnd > 0) intersections += activeIntersections - 1;
        if (intersections > 10000000) return -1;
    }
    return intersections;
}

function compare(a, b) {
    return a.x !== b.x ? a.x - b.x : b.startEnd - a.startEnd;
}

class DiscLog {
    constructor(x, startEnd) {
        this.x = x;
        this.startEnd = startEnd;
    }
}

console.log(solution([1, 5, 2, 1, 4, 0]));
