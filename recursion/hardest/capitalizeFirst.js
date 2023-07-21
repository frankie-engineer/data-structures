// capitalize first letter of each string in array
function capitalizeFirst(arr) {
    if (arr.length === 1) return [capitalize(arr[0])];
    return [capitalize(arr[0]), ...capitalizeFirst(arr.slice(1))];
}

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']
