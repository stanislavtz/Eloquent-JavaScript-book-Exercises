function calculateFib(n) {
    if(n <= 1) {
        return 1;
    }
    let r = calculateFib(n - 1) + calculateFib(n - 2);

    return r;
}

console.log(calculateFib(5));