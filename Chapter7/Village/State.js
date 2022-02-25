const roadsGraph = require('../Graph/graphGenerator.js');

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

module.exports = State;