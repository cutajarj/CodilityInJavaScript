/**
 * This is the solution for CountingElements > MaxCounters
 * This is marked as RESPECTABLE difficulty
 */


function solution(N, A) {
    let counters = new Array(N).fill(0);
    let start_line = 0;
    let current_max = 0;
    A.forEach(instruction => {
        let index = instruction - 1;
        if (instruction > N) start_line = current_max;
        else if (counters[index] < start_line) counters[index] = start_line + 1;
        else counters[index] += 1;
        if (instruction <= N && counters[index] > current_max) current_max = counters[index];
    });
    for (let i = 0; i < counters.length; i++) {
        if (counters[i] < start_line) counters[i] = start_line;
    }
    return counters;
}

console.log(solution(5, [3, 4, 4, 6, 1, 4, 4]));
