// return longest substring of unique chars
function findLongestSubstring(str) {
    if (str.length === 0) return 0;
    if (str.length === 1) return 1;

    // assuming string of at least length 2
    let maxLength = -Infinity;
    let unique = new Set([str[0]]);
    let start = 0;
    let end = 1;

    while (end < str.length) {
        console.log('UNIQUE', unique);
        if (!unique.has(str[end])) {
            unique.add(str[end]);
            maxLength = Math.max(maxLength, end - start);
            end++;
        } else if (unique.has(str[end])) {
            start = end++;
            end = start++;
            console.log(start, end)
            unique = new Set([str[start]]);
        } else break;
    }

    return maxLength;
}

console.log(findLongestSubstring('')); // 0
console.log(findLongestSubstring('rithmschool')); // 7
console.log(findLongestSubstring('thisisawesome')); // 6
console.log(findLongestSubstring('thecatinthehat')); // 7
console.log(findLongestSubstring('bbbbbb')); // 1
console.log(findLongestSubstring('longestsubstring')); // 8
console.log(findLongestSubstring('thisishowwedoit')); // 6
