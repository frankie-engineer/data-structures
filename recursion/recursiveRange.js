/**
 * return sum of all nums up to n
 */
function recursiveRange(n) {
    if (n === 0) return 0;
    return n + recursiveRange(n - 1);
}

console.log(recursiveRange(3)); // 6
console.log(recursiveRange(1)); // 1
console.log(recursiveRange(0)); // 0
