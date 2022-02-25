const State = require('./Village/State');

let first = new State(
    "Post Office",
    [{ location: "Post Office", address: "Alice's House" }]
);

let next = first.move("Alice's House");


console.log(next.location);
console.log(next.parcels);
console.log(first.location);