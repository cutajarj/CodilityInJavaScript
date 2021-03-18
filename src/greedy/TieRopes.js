/**
 * This is the solution for Greedy > TieRope
 *
 * This is marked as PAINLESS difficulty
 */


function solution(K, A) {
    let count = 0;
    let ropeLength = 0;
    A.forEach(rope => {
        ropeLength += rope;
        if (ropeLength >= K) {
            count++;
            ropeLength = 0;
        }
    });
    return count;
}

console.log(solution(4, [1, 2, 3, 4, 1, 1, 3]));
