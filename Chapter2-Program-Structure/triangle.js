let symbol= '';
const lines = 5;

function printClusters(n) {
    if(n == lines) {
        return console.log(symbol);
    }
    
    symbol ? console.log(symbol) : '';
    
    symbol += '#';
    
    return printClusters(n+1);
}

printClusters(symbol.length);