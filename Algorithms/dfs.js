const tree = require('./tree');

const result = [];

function dfs(tree) {
    if (tree.children === null) {
        result.push(tree.value);
        return;
    }

    tree.children.forEach(child => {
        return dfs(child);
    });

    result.push(tree.value);

    return result;
}

console.log(dfs(tree).join(' => '))