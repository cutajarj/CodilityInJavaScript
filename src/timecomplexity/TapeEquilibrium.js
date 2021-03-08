/**
 * This is the solution for Time Complexity > Tape Equilibrium
 * This is marked as PAINLESS difficulty
 */


function solution(A) {
    leftSum = A[0];
    rightSum = 0;
    A.forEach(number => rightSum += number);
    rightSum -= leftSum

    diff = Math.abs(leftSum - rightSum);
    for (i = 1; i < A.length - 1; i++) {
        leftSum += A[i];
        rightSum -= A[i];
        currentDiff = Math.abs(leftSum - rightSum);
        if (diff > currentDiff) diff = currentDiff;
    }
    return diff;
}

console.log(solution([3, 1, 2, 4, 3]));
