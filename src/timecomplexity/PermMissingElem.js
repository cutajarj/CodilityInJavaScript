/**
 * This is the solution for Time Complexity > Perm Missing Element
 * This is marked as PAINLESS difficulty
 */


function solution(A) {
    var actualSum = 0;
    A.forEach(number => {
        actualSum += number;
    });
    maxNumber = A.length + 1;
    expectedSum = (maxNumber * (maxNumber + 1) / 2);
    return (expectedSum - actualSum);
}

console.log(solution([2, 3, 1, 5]));
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(solution([]));
