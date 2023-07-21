// returns an array of all values that are strings
function collectStrings(obj) {
    let stringsArray = [];

    for (let key in obj) {
        let el = obj[key];

        if (typeof el === 'string') stringsArray.push(el);
        if (typeof el === 'object') return [...stringsArray, ...collectStrings(el)];
    }

    return stringsArray;
}

// TESTS
const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
