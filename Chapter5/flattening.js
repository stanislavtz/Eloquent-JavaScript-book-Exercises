function flatten(arrays) {
    return arrays.reduce((acc, el) => acc.concat(el));
}

let arrays = [[1, 2, 3], [4, 5], [6]];

console.log(flatten(arrays));