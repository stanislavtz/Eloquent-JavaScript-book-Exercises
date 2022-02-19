function loop(value, test, update, result) {
    if (!test(value)) { return };
    result(value);
    value = update(value);
    return loop(value, test, update, result);
}

const collection = [];

const initialValue = 5;

const testFunc = (n) => n > 0;
const updateFunc = (n) => n-1;
const resultFunc = (n) => collection.push(n);
const mapCollection = (arr) => arr.map(x => `=> Number: ${x}`);
const print = (n) => console.log(n);

loop(initialValue, testFunc, updateFunc, resultFunc);

print(mapCollection(collection).join('\n'));

