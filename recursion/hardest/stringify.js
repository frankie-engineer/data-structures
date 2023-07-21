// finds all values that are objects and converts them to strings
// @returns the new obj

function stringifyNumbers(obj) {
    let newObj = {};

    for (let key in obj) {
        let el = obj[key];

        if (typeof el === 'number') {
            newObj[key] = String(el);

        } else if (typeof el === 'object' && !Array.isArray(el)) {
            newObj[key] = stringifyNumbers(el);

        } else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}



let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

console.log('ORIGINAL, BEFORE', obj);
console.log(stringifyNumbers(obj));
console.log('ORIGINAL, AFTER', obj);
// {
//     num: "1",
//     test: [],
//     data: {
//         val: "4",
//         info: {
//             isRight: true,
//             random: "66"
//         }
//     }
// }
