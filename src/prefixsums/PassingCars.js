/**
 * This is the solution for Prefix Sums > Passing Cars
 *
 * This is marked as PAINLESS difficulty
 */

function solution(A) {
    let suffixSum = new Array(A.length + 1).fill(0);
    let count = 0;
    for (let i = A.length - 1; i >= 0; i--) {
        suffixSum[i] = A[i] + suffixSum [i + 1];
        if (A[i] === 0) count += suffixSum[i];
        if (count > 1000000000) return -1;
    }
    return count;
}

console.log(solution([0, 1, 0, 1, 1]));
