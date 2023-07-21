function sameFrequency(int1, int2) {
    let str1 = String(int1).split('');
    let str2 = String(int2).split('');

    if (str1.length !== str2.length) return false;

    let freqCounter1 = {};
    let freqCounter2 = {};

    str1.forEach(char => freqCounter1[char] = (freqCounter1[char] || 0) + 1);
    str2.forEach(char => freqCounter2[char] = (freqCounter2[char] || 0) + 1);

    console.log(freqCounter1, freqCounter2)

    for (let i = 0; i < str1.length; i++) {
        let digit = str1[i];
        if (!freqCounter2[digit]) return false;
        if (freqCounter1[digit] !== freqCounter2[digit]) return false;
    }

    return true;
}

console.log(sameFrequency(123, 321)); // true
console.log(sameFrequency(123, 3321)); // false
console.log(sameFrequency(12, 23)); // false
