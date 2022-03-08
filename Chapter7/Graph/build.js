const roads = require('../Roads/roads.js');

function buildGraph(edges) {
    let graph = {};

    function generateEdge(from, to) {
        if (!graph[from]) {
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

module.exports = buildGraph(roads);