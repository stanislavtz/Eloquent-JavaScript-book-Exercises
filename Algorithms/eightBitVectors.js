let counter = 0;
function generate(index, array) {
    if(index >= array.length) {
        // counter++;
        return console.log(`${counter++} => ${array.join(' ')}`);
    }

    for (let i = 0; i < 2; i++) {
        array[index] = i;
        generate(index+1, array);        
    }
}
    
const result = new Array(8);

generate(0, result);