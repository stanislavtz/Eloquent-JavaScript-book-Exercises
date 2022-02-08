const collection = ['a', 'b', 'c'];

function permute(indx) {
    if (indx >= collection.length) {
        return console.log(collection.join(' '));
    }

    permute(indx + 1);

    for (let i = indx + 1; i < collection.length; i++) {
        swap(indx, i);
        permute(indx + 1);
        swap(indx, i);

    }
}

function swap(a, b) {
    let temp = collection[a];
    collection[a] = collection[b];
    collection[b] = temp;
}

permute(0);