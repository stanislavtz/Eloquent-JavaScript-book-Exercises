function range(start, end, step = 1) {
    const result = [];

    function setArray(begin) {
        if(begin > end && step < 0) {
            result.push(begin);
            return setArray(begin+step);
        }
        
        if(begin < end && step > 0) {
            result.push(begin);
            return setArray(begin+step);
        }
    
        if (begin === end) {
            result.push(begin);
        } 
    
        return result;
    }

    return setArray(start);
}


const sum = (arr) => arr.reduce((acc, el) => acc + el);

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55