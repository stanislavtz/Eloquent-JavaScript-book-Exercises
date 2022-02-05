const used = new Set();
const collection = ['a', 'b', 'c'];
const permutations = new Array(collection.length);

function Permute(index) {
    if (index >= permutations.length) {
        return console.log(permutations.join(' '));
    }

    for (let i = 0; i < collection.length; i++) {
        if (!used.has(collection[i])) {
            used.add(collection[i]);
            permutations[index] = collection[i];
            Permute(index + 1);
            used.delete(collection[i]);
        }
    }
}

Permute(0)