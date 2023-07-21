/**
 *
 * @param {*} arr - non empty array
 * @returns product of all elements in array
 */
function productOfArray(arr) {
    if (arr.length === 0) return 1;
    return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([0, 1, 2, 3])); //0
console.log(productOfArray([3])); // 3
