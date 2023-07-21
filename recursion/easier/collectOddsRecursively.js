function collectOdds(arr) {
    let odds = [];

    if (arr.length === 0) return [];
    if (arr[0] % 2 !== 0) odds.push(arr[0]);
    return [...odds, ...collectOdds(arr.slice(1))];
}

console.log(collectOdds([1, 2, 3, 4, 5]));
