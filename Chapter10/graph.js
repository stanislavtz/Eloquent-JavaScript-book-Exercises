const graph = {};

function buildGraph(array) {
    for (const [from, to] of array) {
        createEdge(from, to);
        createEdge(to, from);
    }

    return graph;
}

function createEdge(start, end) {
    if(!graph[start]) {
        graph[start] = [];
    }

    if(!graph[start].includes(end)) {
        graph[start].push(end);
    }
}

module.exports = buildGraph;