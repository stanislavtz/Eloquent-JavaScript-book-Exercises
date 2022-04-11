const reverse = require('./showArgs.js');
const { readFile, writeFile, rm } = require('fs').promises;

// let demo = reverse(process.argv[2]);
// console.log(demo);

rm('../../demoText.txt')
    .then(() => console.log('The file was removed!'))
    .catch(err => console.error(err));