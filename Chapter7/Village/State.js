const roadsGraph = require('../graphGenerator.js');

class State {
    constructor(location, parcels) {
        this.location = location;
        this.parcels = parcels;
    }

    move(direction) {
        if (!roadsGraph[this.location].includes(direction)) {
            return this;
        }

        const parcels = this.parcels
            .map(p => p.location != this.location ? p : {...p, location: direction})
            .filter(p => p.location != p.address)

        return new State(direction, parcels);
    }
}

let first = new State(
    "Post Office",
    [{ location: "Post Office", address: "Alice's House" }]
);

let next = first.move("Alice's House");


console.log(next.location);
console.log(next.parcels);
console.log(first.location);