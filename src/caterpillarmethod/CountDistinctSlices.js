/**
 * This is the solution for Caterpillar method > CountDistinctSlices
 *
 * This is marked as PAINLESS difficulty
 */

function solution(M, A) {
    let totalSlices = 0;
    let inCurrentSlice = new Array(M + 1).fill(false);
    let head = 0;
    for (let tail = 0; tail < A.length; tail++) {
        while (head < A.length && !inCurrentSlice[A[head]]) {
            inCurrentSlice[A[head]] = true;
            totalSlices += (head - tail) + 1;
            head += 1;
            if (totalSlices > 1000000000)
                totalSlices = 1000000000;
        }
        inCurrentSlice[A[tail]] = false;
    }
    return totalSlices;
}

console.log(solution(0, [0]));
console.log(solution(6, [3, 4, 5, 5, 2]));
console.log(solution(9, [2, 4, 1, 7, 4, 9, 7, 3, 5, 5, 8, 7, 1]));

