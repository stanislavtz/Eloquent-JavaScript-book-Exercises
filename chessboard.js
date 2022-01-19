const boardSize = 8;

function createLine(size) {
    const symbol = '#';
    const line = [];

    for (let i = 0; i < size; i++) {
        i % 2 == 0 ? line.push(symbol) : line.push(' ');
    }

    return line;
}

function printTable(size) {
    const line = createLine(size);
    
    for (let i = 0; i < size; i++) {
        console.log(line.reverse().join(''))
    }
}

printTable(boardSize);