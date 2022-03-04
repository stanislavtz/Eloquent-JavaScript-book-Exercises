const findRoute = require('../Utils/find-route.js');
const roadsGraph = require('../Graph/build.js');

function goalOrientedRobot({ location, parcels }, route) {
    if (route.length == 0) {
        let parcel = parcels[0];
        if (parcel.location != location) {
            route = findRoute(roadsGraph, location, parcel.location);
        } else {
            route = findRoute(roadsGraph, location, parcel.address);
        }
    }

    return { direction: route[0], memory: route.slice(1) };
}

module.exports = goalOrientedRobot;