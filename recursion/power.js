/**
 *
 * @param {*} base - positive int
 * @param {*} exponent - positive int
 * @returns base ^ exponent
 */
function power(base, exponent) {
    if (exponent == 0) return 1;
    return base * power(base, exponent - 1);
}

console.log(power(2, 3)); //8
console.log(power(1, 3)); //1
console.log(power(0, 2)); //0
console.log(power(2, 0)); //1
