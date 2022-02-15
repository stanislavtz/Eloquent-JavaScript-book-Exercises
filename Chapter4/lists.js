const arrayToList = (array) => {
    let  top = {
        value: array[array.length - 1],
        rest: null,
    }

    for (let i = array.length - 2; i >= 0; i--) {
        const node = {
            value: array[i],
            rest: top,
        }

        top = node;
    }

    return top;
}

const listToArray = (collection, result = []) => {
    const queue = [collection.value];
    
    let next = collection.rest;

    while(queue.length > 0) {
        result.push(queue.shift());
        next ? queue.push(next.value) : null;
        next = next?.rest;
    }

    return result;
}

function prepend(value, data) {
    return {
        value,
        rest: data
    }
}

function nth(list, position, counter=0) {
    if(!list) {
        return undefined;
    }

    if(counter == position) {
        return list.value;
    }
    
    counter++;

    return nth(list.rest, position, counter);
}

// Your code here.

console.log(arrayToList([10, 20, 30]));
// → {value: 10, rest: {value: 20, rest: null}}

console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]

console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}

console.log(nth(arrayToList([10, 20, 30]), 2));
// → 20