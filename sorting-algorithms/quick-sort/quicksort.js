/**
 *
 * IN PLACE Quicksort

 * O(n * log(n))
 *
 */
function quicksortInPlace(arr) {
  console.log('ARR', arr);
  // Check if the input is length 1 or less
  // If so, it's already sorted: return
  if (arr.length <= 1) return arr;

  // Pick the first value as the pivot
  let pivot = arr[0];

  // *******************
  // OUT OF PLACE METHOD:
  // Orient the pivot so that...
  // every number smaller than the pivot is to the left
  // every number larger (or equal) than the pivot is to the right
  // *******************
  // IN PLACE METHOD:
  // swap all nums < pivot to the left
  // swap pivot with first num > pivot, shift the rest of the array right
  // ********************
  for (let i = 1; i < arr.length; i++) {
    let el = arr[i];

    // if LESS than pivot, swap with PREVIOUS element
    if (el < pivot) el[i - 1] = el[i];

    // if GREATER than pivot, swap with NEXT element
    if (el > pivot) el[i + 1] = el[i];
  }

  // Recursively sort the left & right
  let indexOfPivot = arr.indexOf(pivot);
  let left = arr.slice(0, indexOfPivot);
  let right = arr.slice(indexOfPivot, arr.length);

  // Return the left, pivot and right in sorted order
  return [...recursiveSort(left), ...recursiveSort(right)];
}

function recursiveSort(arr) {
  // if array is length 0 or 1, it's already sorted
  if (arr.length <= 1) return arr;

  // find max value in array & remove it
  let maxIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[maxIndex]) maxIndex = i;
  }
  const maxValue = arr[maxIndex];
  arr.splice(maxIndex, 1);

  // set arr equal to the rest of arr sorted
  arr = recursiveSort(arr);

  // push max value to back of arr
  arr.push(maxValue);
  return arr;
}


/**
 *
 * OUT OF PLACE Quicksort
 * O(1)
 *
 */
function quicksort(arr) {
  console.log('ARR', arr);
  // Check if the input is length 1 or less
  // If so, it's already sorted: return
  if (arr.length <= 1) return arr;

  // Pick the first value as the pivot
  let pivot = arr[0];

  // Orient the pivot so that...
  // every number smaller than the pivot is to the left
  // every number larger (or equal) than the pivot is to the right
  let left = [];
  let right = [];

  for (let i = 1; i < arr.length; i++) {
    let el = arr[i];

    if (el < pivot) left.push(el);
    if (el >= pivot) right.push(el);
  }

  // Recursively sort the left & right
  left = recursiveSort(left);
  right = recursiveSort(right);

  // Return the left, pivot and right in sorted order
  return [...left, pivot, ...right];
}

function recursiveSort(arr) {
  // if array is length 0 or 1, it's already sorted
  if (arr.length <= 1) return arr;

  // find max value in array & remove it
  let maxIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[maxIndex]) maxIndex = i;
  }
  const maxValue = arr[maxIndex];
  arr.splice(maxIndex, 1);

  // set arr equal to the rest of arr sorted
  arr = recursiveSort(arr);

  // push max value to back of arr
  arr.push(maxValue);
  return arr;
}

console.log(quicksortInPlace([2, 4, 6, 8, 1, 3, 5, 7, 9]));

module.exports = [quicksort];
