/**
 *
 * @param {*} arr
 * @returns {number} uniqueValues
 */

function countUniqueValues(arr) {
    if (arr.length === 0) return 0;

    let uniqueValues = 0;
    arr.forEach((el, i) => {
        if (arr[i] !== arr[i + 1]) uniqueValues++;
    });

    return uniqueValues;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4])); // 4
console.log(countUniqueValues([1])); // 1
console.log(countUniqueValues([])); // 0
