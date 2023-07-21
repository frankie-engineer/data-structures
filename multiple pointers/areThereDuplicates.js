function areThereDuplicates(...args) {
    return new Set(args).size !== args.length;
}

console.log(areThereDuplicates(1, 1, 2, 3)); //true
console.log(areThereDuplicates(1, 2, 3)); //false
