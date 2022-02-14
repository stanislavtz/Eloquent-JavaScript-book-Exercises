const tree = require('./tree');

const queue = [];
const result = [];

function bfs(tree) {
    if (Object.keys(tree).length === 0) {
        throw new Error('The tree is empty');
    }

    if (!tree.hasOwnProperty('value')) {
        throw new Error('The tree must have value');
    }

    queue.push(tree);

    while (queue.length > 0) {
        const vertex = queue.shift();
        result.push(vertex.value);

        vertex.children?.forEach(child => {
            queue.push(child);
        });
    }

    return result;
}

console.log(bfs(tree).join(' => '));