function reverseArray(arr) {
    const result = [];
    const tempArray = [...arr];
    while(tempArray.length > 0) {
        result.push(tempArray.pop());
    }

    return result;
}

function reverseArrayInPlace(arr) {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        // arr[i], arr[arr.length - 1 - i] = arr[arr.length - 1 - i], arr[i]; 
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;     
    }
}

let arrayLetters = ["A", "B", "C"];

console.log(reverseArray(arrayLetters));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]