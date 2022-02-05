let result;
function calculate(a, b) {
    if(a <= 1 || b == 0 || b == a) {
        return 1
    }

    result =  calculate(a-1, b) + calculate(a-1, b-1);

    return result;
} 

console.log(calculate(3, 2));