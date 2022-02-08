
function variation(collection, k) {
    if(collection.length == 0) {
        return collection.join(', ');
    }

    for (let i = 0; i < k; i++) {
        swap(collection[i], collection[k]);
        variation(collection, k);
        swap(collection[i], collection[k]);
    }
}

function swap(first, second) {
    [first, second] = [second, first];
}

const elements = ['a', 'b', 'c', 'd'];

console.log(variation(elements, 3))