function factorial(num) {
    let factorial = 1;

    for (let i = 2; i <= num; i++) {
        factorial *= i;
    }

    return factorial;
}

function factorialRecursive(num) {
    //base case
    if (num === 1) return 1;

    // recursive case
    return num * factorial(num - 1);
}


console.log(factorial(5));
console.log(factorialRecursive(5));
console.log(5 * 4 * 3 * 2);
