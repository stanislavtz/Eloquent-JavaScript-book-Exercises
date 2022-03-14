const { bigOak, defineRequestType } = require('../crow-tech');

class Timeout extends Error { }

// bigOak.readStorage("food caches", caches => {
//     let firstCache = caches[0];
//     bigOak.readStorage(firstCache, info => {
//         console.log(info);
//     });
// });
function storage(nest, name) {
    return new Promise(resolve => {
        nest.readStorage(name, result => resolve(result));
    });
}

storage(bigOak, "food caches")
    .then(res => storage(bigOak, res[0]))
    .then(r => console.log(r))


// defineRequestType("note", (nest, content, source, done) => {
//     console.log(`${nest.name} received note: ${content}`);
//     done();
// });
function requestType(name, handler) {
    defineRequestType(name, (nest, content, source,
        callback) => {
        try {
            Promise.resolve(handler(nest, content, source))
                .then(response => callback(null, response),
                    failure => callback(failure));
        } catch (exception) {
            callback(exception);
        }
    });
}

// bigOak.send('Cow Pasture', 'note', 'Let\'s caw loudly at 7.30 PM', () => {
//     console.log('Not delivered');
// });

function request(nest, target, type, content) {
    return new Promise((resolve, reject) => {
        let done = false;
        function attempt(n) {
            nest.send(target, type, content, (failed, value) => {
                done = true;
                if (failed) reject(failed);
                else resolve(value);
            });
            setTimeout(() => {
                if (done) return;
                else if (n < 3) attempt(n + 1);
                else reject(new Timeout("Timed out"));
            }, 250);
        }
        attempt(1);
    });
}