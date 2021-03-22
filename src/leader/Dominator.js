/**
 * This is the solution for Leader > Dominator
 *
 * This is marked as PAINLESS difficulty
 */

function solution(A) {
    let consecutiveSize = 0;
    let candidate = 0;
    A.forEach(item => {
        if (consecutiveSize === 0) {
            candidate = item;
            consecutiveSize += 1;
        } else if (candidate === item) {
            consecutiveSize += 1;
        } else {
            consecutiveSize -= 1;
        }
    });

    let occurrence = 0;
    let index = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] === candidate) {
            occurrence++;
            index = i;
        }
    }
    return occurrence > A.length / 2.0 ? index : -1;
}

console.log(solution([3, 0, 1, 1, 4, 1, 1]));
console.log(solution([1, 2, 3, 4, 5, 6, 7]));
