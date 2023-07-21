function flatten(arr) {
    let flattened = [];

    arr.forEach(el => {
        if (Array.isArray(el)) flattened = [...flattened, ...flatten(el)];
        else flattened.push(el);
    });

    return flattened;
}

console.log(flatten([])); // []
console.log(flatten([1])); // [1]
console.log(flatten([[1]])); // [1]
console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]
