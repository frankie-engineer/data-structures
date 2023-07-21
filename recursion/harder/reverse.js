function reverse(str) {
    if (str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0];
}

console.log(reverse('abc')); // cba
console.log(reverse('ab')); // ba
console.log(reverse('a')); // a
console.log(reverse('')); // ''
console.log(reverse('awesome')); // 'emosewa'

// a w e s o m e
// E w e s o m A
// E M e s o W A
// E M O s E W A
//       ^ left = right
