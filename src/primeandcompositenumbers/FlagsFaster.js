/**
 * This is the alternate solution for Primes And Composite > Flags
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

    let upper_guess = Math.trunc(Math.sqrt(A.length) + 2);
    let lower_guess = 0;
    while (lower_guess < upper_guess - 1) {
        let current_guess = Math.trunc((lower_guess + upper_guess) / 2);
        if (canPlaceFlags(peaks, current_guess))
            lower_guess = current_guess;
        else
            upper_guess = current_guess;
    }

    return lower_guess;
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
