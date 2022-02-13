let result = 1;
function calculateFactorial(n) {
    if(n == 1 || n == 0) {
        return 1;
    }    

    return n * calculateFactorial(n-1);
}

console.log(calculateFactorial(10));