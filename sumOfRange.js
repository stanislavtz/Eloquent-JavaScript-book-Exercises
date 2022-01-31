function range(start, end, step = 1) {
    const result = [];
    
    const setArray = (start, end, step) => {
        if (start === end) {
            result.push(start);
        } else {
            result.push(start);
            return setArray(start + step, end, step);
        }
        return result;
    }

    return setArray(start, end, step);
}

const sum = (arr) => arr.reduce((acc, el) => acc + el, 0);

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55