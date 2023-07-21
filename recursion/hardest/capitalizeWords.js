// returns array of all words capitalized
function capitalizedWords(words) {
    if (words.length === 1) return [words[0].toUpperCase()];
    return [words[0].toUpperCase(), ...capitalizedWords(words.slice(1))];
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
