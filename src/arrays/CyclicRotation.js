/**
 * This is the solution for Arrays > CyclicRotation
 *
 * This is marked as PAINLESS difficulty
 */

function solution(A, K) {
    let result = new Array(A.length);
    for (let i = 0; i < result.length; i++) {
        result[(i + K) % A.length] = A[i];
    }
    return result;
}

console.log(solution([7, 2, 8, 3, 5], 2));

console.log(solution([7, 2, 8, 3, 5], 5));

console.log(solution([7, 2, 8, 3, 5], 10));
