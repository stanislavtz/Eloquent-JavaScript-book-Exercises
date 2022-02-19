const tree = require('./tree');

const result = [];

function dfs(tree) {
    result.push(tree.value);
    
    if (tree.children === null) {
        return;
    }

    tree.children.forEach(child => {
        return dfs(child);
    });

    return result;
}

console.log(dfs(tree).join(' => '));