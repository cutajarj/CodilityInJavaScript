/**
 * This is the solution for Maximum Slice Problem > Max Profit
 *
 * This is marked as PAINLESS difficulty
 */


function solution(A) {
    let globalMaxSum = 0;
    let localMaxSum = 0;
    for (let i = 1; i < A.length; i++) {
        let d = A[i] - A[i - 1];
        localMaxSum = Math.max(d, localMaxSum + d);
        globalMaxSum = Math.max(localMaxSum, globalMaxSum);
    }
    return globalMaxSum;
}

console.log(solution([23171, 21011, 21123, 21366, 21013, 21367]));
