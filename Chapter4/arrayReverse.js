function reverseArray(arr) {
    const result = [];
    const tempArray = [...arr];
    while (tempArray.length > 0) {
        result.push(tempArray.pop());
    }

    return result;
}

function reverseArrayInPlace(arr) {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        [arr[i], arr[arr.length - i -1]] = [arr[arr.length - i -1], arr[i]];
    }
}

let result = [];
let index = 0;

function reverseRecursion(arr) {
    if(index === Math.floor(arr.length / 2)) {
        return console.log(arr);
    }

    [arr[index], arr[arr.length-index-1]]=[arr[arr.length-index-1], arr[index]];
    index++;
    
    return reverseRecursion(arr);
}


function reverseRecursionAndSwap(arr) {
   if (arr.length < 1) {
        arr = arr.concat(arr);
        return console.log(arr);
    }

    arr.push(arr.pop());
    
    return reverseRecursion(arr);
}

let arrayLetters = ["A", "B", "C", "D"];
let arrayValue = [1, 2, 3, 4, 5];

console.log(reverseArray(arrayLetters));

reverseArrayInPlace(arrayValue);
console.log(arrayValue);

reverseRecursion(arrayLetters);

reverseRecursionAndSwap(arrayValue);