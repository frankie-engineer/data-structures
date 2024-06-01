/** anagrams()
 *
 * @returns true if str1 & str2 are anagrams
 * 'anagram' - the words are made up of the same set of letters
 *
 * Note: uses a set since you only need to store 1 of each letter
 */
function anagrams(str1, str2) {
  let chars1 = str1.split('');
  let chars2 = str2.split('');

  if (chars1.length !== chars2.length) {
    return false;
  }

  let set1 = new Set(chars1);
  chars1.forEach(char => set1[char] = char);

  for (let i = 0; i < chars2.length; i++) {
    if (!set1.has(chars2[i])) {
      return false;
    }
  }

  return true;
}

/**
 *
 * @returns integers that are in both arrays
 *
 * Note: uses a set because it only needs to return each integer once
 */
function commonElements(arr1, arr2) {
  let commonInts = [];
  let arrLong = [];
  let arrShort = [];

  // find longer and shorter arrays
  if (arr1.length > arr2.length) {
    arrLong = arr1;
    arrShort = arr2;
  } else {
    arrLong = arr2;
    arrShort = arr1;
  }

  let setLong = new Set(arrLong);
  arrShort.forEach(int => {
    if (setLong.has(int)) {
      commonInts.push(int);
    }
  });

  return commonInts;
}


/**
 * Find the one integer that appears twice in the array
 * All other integers appear once
 *
 * O(N)
 */
function duplicate(arr) {
  let counts = new Array(arr.length);

  for (let i = 0; i < arr.length; i++) {
    let int = arr[i];

    if (!counts[int]) {
      counts[int] = { int: 1 };
    } else {
      return int;
    }
  }
}

/**
 * Determine if 2 nums in 'nums' sum to target
 * Can't use same num twice
 *
 * O(N)
 */
function twoSum(nums, target) {
  let uniqueNums = new Set(nums);

  for (let i = 0; i < nums.length; i++) {
    let currNum = nums[i];
    let neededNum = target - currNum;

    if (uniqueNums.has(neededNum) && currNum !== neededNum) {
      return true;
    }
  }

  return false;
}

/**
 * Given a pattern and an array of strings, determine whether the array
 * follows the specified pattern. Solve this in `O(n)` time.
 *
 * Assume pattern & string are same length
 *
 * Example:
 * wordPattern("ABBA", ['dog', 'cat', 'cat', 'dog']);
 */
function wordPattern(pattern, strings) {
  let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let stringsAsLetters = '';
  let lettersMap = {};

  let i = 0;
  strings.forEach(string => {
    // if string isn't yet in strings to letters map, add it
    if (!lettersMap[string]) {
      lettersMap[string] = letters[i];
      i++;
    }

    // concatenate letter version of string to 'stringsAsLetters'
    stringsAsLetters += lettersMap[string];
  });

  return pattern === stringsAsLetters;
}

module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];
