/**
 * This is the alternate solution for Sorting > NumberOfDiscIntersections
 *
 * This is marked as RESPECTABLE difficulty
 */

function indexLessThan(sortedDiskList, i, start, last) {
    let mid = Math.trunc(start + (last - start) / 2);
    if (last <= start && sortedDiskList[mid].start > i)
        return mid - 1;
    if (last <= start)
        return mid;
    if (sortedDiskList[mid].start > i)
        return indexLessThan(sortedDiskList, i, start, mid - 1);
    else
        return indexLessThan(sortedDiskList, i, mid + 1, last);
}

function solution(A) {
    let len = A.length;
    let discs = new Array(len);
    for (let i = 0; i < len; i++) {
        discs[i] = new Disc(i - A[i], i + A[i]);
    }
    discs.sort( (a, b) => a.start - b.start)
    let total = 0;
    for (let i = 0; i < len; i++) {
        total += indexLessThan(discs, discs[i].end + 0.5, 0, len - 1) - i;
        if (total > 10000000) return -1;
    }
    return total;
}

class Disc {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
}

console.log(solution([1, 5, 2, 1, 4, 0]));
