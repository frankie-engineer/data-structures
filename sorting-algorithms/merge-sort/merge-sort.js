// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {
  // Check if the input is length 1 or less
  // If so, it's already sorted: return
  // Divide the array in half
  // Recursively sort the left half
  // Recursively sort the right half
  // Merge the halves together and return

  if (arr.length <= 1) {
    return arr;
  }

  let half = Math.floor(arr.length / 2);
  let left = arr.slice(0, half);
  let right = arr.slice(half, arr.length);

  left = recursiveSort(left);
  right = recursiveSort(right);

  return merge(left, right);
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


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {
  // Create an empty return array
  // Point to the first value of each array
  // While there are still values in each array...
  // Compare the first values of each array
  // Add the smaller value to the return array
  // Move the pointer to the next value in that array
  // Return the return array

  let mergedArr = [];
  let a = 0;
  let b = 0;

  while (a < arrA.length || b < arrB.length) {
    // if we got to end of arrA OR the el in arrB is smaller
    if (a === arrA.length || arrA[a] > arrB[b]) {
      mergedArr.push(arrB[b]);
      b++;

      // else, push the element in arrB
    } else {
      mergedArr.push(arrA[a]);
      a++;
    }
  }

  return mergedArr;
}

module.exports = [merge, mergeSort];
