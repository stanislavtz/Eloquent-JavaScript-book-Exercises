let symbol= '';

function printClusters(n) {
    if(n == 7) {
        return console.log(symbol);
    }
    
    symbol ? console.log(symbol) : '';
    
    symbol += '#';
    
    return printClusters(n+1);
}

printClusters(symbol.length);