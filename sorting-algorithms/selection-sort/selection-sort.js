

function selectionSort(arr) {
  // Copy the original array
  // Create an array to store the sorted values
  // While the array is not empty...

  // Do not move this console.log - console.log(sorted.join(","));

  // Find the index of the minimum value in the unsorted half
  // Save and remove the value at the min index
  // Add the min value to the end of the sorted array

  let unsorted = arr.slice(0);
  let sorted = [];

  while (unsorted.length > 0) {
    console.log(sorted.join(","));

    let min = Math.min(...unsorted);
    let indexOfMin = unsorted.indexOf(min);
    unsorted.splice(indexOfMin, 1)[0];
    sorted.push(min);
  }

  return sorted;
}



function selectionSortInPlace(arr) {
  // Set a pointer at zero diving the array into sorted and unsorted halves
  // Repeat while the unsorted half is not empty:

  // Do not move this console.log - console.log(arr.join(","));

  // Find the index of the minimum value in the unsorted half
  // Save the min value
  // Shift every unsorted value to the left of the min value to the right by 1
  // Put the min value at the divider
  // Increment the divider and repeat

  let i = 0;
  while (i < arr.length) {
    console.log(arr.join(","));

    let min = Math.min(...arr.slice(i));
    let indexOfMin = arr.indexOf(min);

    for (let j = indexOfMin - 1; j >= i; j--) {
      arr[j + 1] = arr[j];
    }

    arr[i] = min;
    i++;
  }

  return arr;
}


module.exports = [selectionSort, selectionSortInPlace];
