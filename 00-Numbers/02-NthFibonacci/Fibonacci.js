function fib_memoize(n, memo = { 1: 0, 2: 1 }) {
    if (n in memo) {
        return memo[n];
    } else {
        memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
        return memo[n];
    }
}


function fib_iterative(n) {
    let sequence = [0, 1]
    if (n === 1 || n === 2) {
        return sequence[n - 1];
    }

    for (let i = 2; i < n; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence[sequence.length - 1];
}

function fib(n) {
    let sequence = [0, 1];
    if (n === 1 || n === 2) {
        return sequence[n - 1];
    }

    let nextNumber;
    for (let i = 3; i <= n; i++) {
        nextNumber = sequence[0] + sequence[1];
        sequence[0] = sequence[1];
        sequence[1] = nextNumber;
    }
    return nextNumber;
}

console.log(fib(8));