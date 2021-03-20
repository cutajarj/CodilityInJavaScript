/**
 * This is the solution for Stacks And Queues > Brackets
 *
 * This is marked as PAINLESS difficulty
 */


function solution(S) {
    let stack = [];
    for (const c of S) {
        if (c === '{' || c === '[' || c === '(') {
            stack.push(c);
        } else if (c === '}') {
            if (stack.length === 0 || stack.pop() !== '{') return 0;
        } else if (c === ']') {
            if (stack.length === 0 || stack.pop() !== '[') return 0;
        } else if (c === ')') {
            if (stack.length === 0 || stack.pop() !== '(') return 0;
        }
    }
    return stack.length ? 0 : 1;
}


console.log(solution("()[]{}()[]{}"));

console.log(solution("([{}])"));

console.log(solution("()]]"));

console.log(solution("([)]"));

