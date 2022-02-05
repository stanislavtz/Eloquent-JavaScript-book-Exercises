
function variation(collection, k) {
    if(collection.length == 0) {
        return collection.join(', ');
    }

    for (let i = 0; i < k; i++) {
        swap(collection[i], collection[k]);
        variation();
        swap(collection[i], collection[k]);

    }
}

function swap(first, second) {
    [first, second] = [second, first];
}

const collection = ['a', 'b', 'c', 'd'];