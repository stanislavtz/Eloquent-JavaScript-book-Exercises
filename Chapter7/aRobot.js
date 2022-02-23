const roads = require('./roads.js');

function buildGraph(edges) {
    let graph = {};

    function generateEdge(from, to) {
        if (!graph.hasOwnProperty(from)) {
            graph[from] = [];
        }

        graph[from].push(to);
    }

    edges.forEach(element => {
        const [from, to] = element.split('-');

        generateEdge(from, to);
        generateEdge(to, from);
    });

    return graph;
}

let roadsGraph = buildGraph(roads);

console.log(roadsGraph);

const createGraph = (data)  => {
    let graph = {};

    const addEdge = (from, to) => {
        if(!graph[from]) {
            graph[from] = [];
        }

        graph[from].push(to);
    }
    
    data.forEach(element => {
        const [from, to] = element.split('-');
        addEdge(from, to);
        addEdge(to, from);
    });

    return graph;
}

let rGraph = createGraph(roads);
console.log(rGraph)