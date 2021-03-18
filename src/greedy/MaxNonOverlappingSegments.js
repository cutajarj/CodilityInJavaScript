/**
 * This is the solution for Greedy algorithms > MaxNonoverlappingSegments
 * The problem is equivalent to the Activity Selection Problem,
 * where you have to choose the maximum non overlapping tasks.
 *
 * This is marked as PAINLESS difficulty
 */


function solution(A, B) {
    let lastEndSegment = -1;
    let chosenCount = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] > lastEndSegment) {
            chosenCount++;
            lastEndSegment = B[i];
        }
    }
    return chosenCount;
}

console.log(solution([1, 3, 7, 9, 9], [5, 6, 8, 9, 10]));
