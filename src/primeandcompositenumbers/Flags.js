/**
 * This is the solution for Primes And Composite > Flags
 *
 * This is marked as Respectable difficulty
 */

function solution(A) {
    let nextPeak = A.length;
    let peaks = new Array(A.length);
    peaks[A.length - 1] = nextPeak;
    for (let i = A.length - 2; i > 0; i--) {
        if (A[i - 1] < A[i] && A[i + 1] < A[i])
            nextPeak = i;
        peaks[i] = nextPeak;
    }
    peaks[0] = nextPeak;

    let current_guess = 0;
    let next_guess = 0;
    while (canPlaceFlags(peaks, next_guess)) {
        current_guess = next_guess;
        next_guess += 1;
    }

    return current_guess;
}

function canPlaceFlags(peaks, flagsToPlace) {
    let currentPosition = 1 - flagsToPlace;
    for (let i = 0; i < flagsToPlace; i++) {
        if (currentPosition + flagsToPlace > peaks.length - 1)
            return false;
        currentPosition = peaks[currentPosition + flagsToPlace];
    }
    return currentPosition < peaks.length;
}

console.log(solution([1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]));
