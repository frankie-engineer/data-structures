/**
 * @returns factorial of n
 */

function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(7)); // 5040
console.log(factorial(3)); // 6
console.log(factorial(1)); // 1
