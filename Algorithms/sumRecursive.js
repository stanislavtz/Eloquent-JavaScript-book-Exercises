const arr = [1, 2, 3, 4];

let s = 0;
let index = 0;

function sum() {
    if(arr.length <= 0) {
        return s;
    }

    s += arr.shift();

    return sum(arr);
}

console.log(sum(arr));