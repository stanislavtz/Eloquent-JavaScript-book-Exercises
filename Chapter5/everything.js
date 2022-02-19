function every(array, test) {
    let isFalse = array.find(el => test(el) === false);
    return isFalse ? false : true;
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true