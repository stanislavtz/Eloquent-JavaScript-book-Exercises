function reverse(string) {
    return [...string].reverse().join('');
}

module.exports = reverse;

// const { parse } = require('ini');

// const obj = parse('name=Stanislav\nage=47');
// console.log(obj);