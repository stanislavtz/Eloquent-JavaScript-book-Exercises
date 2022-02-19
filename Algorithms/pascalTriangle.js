function calculate(a, b) {
    if(a <= 1 || b == 0 || b == a) {
        return 1
    }

    return calculate(a-1, b) + calculate(a-1, b-1);;
} 

console.log(calculate(4, 2));