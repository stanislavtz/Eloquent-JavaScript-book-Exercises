const collection = [1, 4, 6, 3, 4, 8, 20, 4, 1, 5, 8];

const swap = (list, first, second) => {
    const temp = list[first];
    list[first] = list[second];
    list[second] = temp;
}

const bubbleSort = (data) => {
    const currentCollection = data.slice();

    for (let i = 0; i < data.length; i++) {
        for (let j = 1; j < data.length - i; j++) {
            if (currentCollection[j - 1] > currentCollection[j]) {
                swap(currentCollection, j - 1, j);
            }
        }
    }

    return currentCollection;
}

console.log(bubbleSort(collection).join(' => '));