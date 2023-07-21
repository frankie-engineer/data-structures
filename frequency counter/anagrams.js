/**
 * @returns true if is an anagram - str2 can be made with letters from str1
 * @retuns false otherwise
 *
 * assume str1 & str2 are strings
 *
 */
function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;

    let freqCounter1 = {};
    let freqCounter2 = {};

    let chars1 = str1.split('');
    let chars2 = str2.split('');

    chars1.forEach(char => freqCounter1[char] = (freqCounter1[char] || 0) + 1);
    chars2.forEach(char => freqCounter2[char] = (freqCounter2[char] || 0) + 1);


    for (let i = 0; i < chars1.length; i++) {
        let char = chars1[i];
        if (!freqCounter2[char]) return false;
        if (freqCounter1[char] !== freqCounter2[char]) return false;
    }

    return true;
}

console.log(isAnagram('abc', 'bca')); // true
console.log(isAnagram('abcc', 'bca')); // false
console.log(isAnagram('dogg', 'ddgo')); // false
console.log(isAnagram('abc', 'abc')); // true
