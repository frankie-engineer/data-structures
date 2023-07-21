/*
@returns true if str2 has all letters in str1 in same freq & order
assume string is not empty
*/

function isSubsequence(str1, str2) {
    let i = 0;
    let j = 0;

    if (str1.length === 0) return false;

    while (j < str2.length) {
        if (str1[i] === str2[j]) i++;
        j++;
    }

    return (i === str1.length);
}

console.log(isSubsequence('', 'hello world')); // false

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false
