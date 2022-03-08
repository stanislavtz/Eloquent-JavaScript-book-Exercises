const roadsGraph = require('../Graph/build.js');
const randomPick = require('../Utils/random-pick.js');

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

    static random(parcelsCount = 5) {
        let parcels = [];

        for (let i = 0; i < parcelsCount; i++) {
            let address = randomPick(Object.keys(roadsGraph));
    
            let location;
            
            do {
                location = randomPick(Object.keys(roadsGraph));
            } while (location == address);
    
            parcels.push({ location, address });
        }
    
        return new State("Post Office", parcels);
    }
}

module.exports = State;