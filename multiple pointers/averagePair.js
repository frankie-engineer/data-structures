/*
arr - sorted array of ints
targetAverage - int

@returns true if there is a pair of el whose average is 'targetAverage'

Time - O(N)
Space - O(1)

*/
function averagePair(arr, targetAverage) {
    if (arr.length === 0) return false;

    let left = arr[0];
    let right = arr[arr.length - 1];

    while (left < right) {
        let ave = (left + right) / 2;
        if (ave === targetAverage) return true;
        if (ave < targetAverage) left++;
        if (ave > targetAverage) right--;
    }

    return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
