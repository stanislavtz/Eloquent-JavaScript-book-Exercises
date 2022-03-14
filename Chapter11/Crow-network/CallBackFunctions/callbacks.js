const { bigOak, defineRequestType } = require('../crow-tech');

// bigOak.readStorage("food caches", caches => {
//     let firstCache = caches[0];
//     bigOak.readStorage(firstCache, info => {
//         console.log(info);
//     });
// });

defineRequestType("note", (nest, content, source, done) => {
    console.log(`${nest.name} received note: ${content}`);
    done();
});

bigOak.send('Cow Pasture', 'note', 'Let\'s caw loudly at 7.30 PM', () => {
    console.log('Not delivered');
});



function storage(nest, name) {
    return new Promise(resolve => {
        nest.readStorage(name, result => resolve(result));
    });
}

storage(bigOak, "food caches")
    .then(res => storage(bigOak, res[0]))
    .then(r => console.log(r))
