/**
 * This is the solution for Euclidean Algorithms > ChocolatesByNumbers
 *
 * This is marked as PAINLESS difficulty
 */


function findGcd(a, b) {
    if (b === 0)
        return a;
    else
        return findGcd(b, a % b);
}

function solution(N, M) {
    return N / findGcd(N, M);
}

console.log(solution(10, 4));
console.log(solution(9, 6));
console.log(solution(10, 11));
