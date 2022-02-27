const State = require('./Village/State');

const roadGraph = require('./Graph/graphGenerator');

console.log(roadGraph)

State.random = function (parcelCount = 5) {
    let parcels = [];
    for (let i = 0; i < parcelCount; i++) {
        let address = randomPick(Object.keys(roadGraph));

        let location;
        do {
            location = randomPick(Object.keys(roadGraph));
        } while (location == address);

        parcels.push({ location, address });
    }

    return new State("Post Office", parcels);
}

function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
}

function findRoute(graph, from, to) {
    let work = [{ at: from, route: [] }];

    for (let i = 0; i < work.length; i++) {
        let { at, route } = work[i];

        for (let place of graph[at]) {
            if (place == to) {
                return route.concat(place)
            }

            if (!work.some(w => w.at == place)) {
                work.push({ at: place, route: route.concat(place) });
            }
        }
    }
}

function goalOrientedRobot({ location, parcels }, route) {
    if (route.length == 0) {
        let parcel = parcels[0];
        if (parcel.location != location) {
            route = findRoute(roadGraph, location, parcel.location);
        } else {
            route = findRoute(roadGraph, location, parcel.address);
        }
    }

    return { direction: route[0], memory: route.slice(1) };
}

function runRobot(state, robot, memory) {
    for (let turn = 0; ; turn++) {
        if (state.parcels.length == 0) {
            console.log(`Done in ${turn} turns`);
            break;
        }

        const action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;

        console.log(`Moved to ${action.direction}`);
    }
}

const generateState = State.random();

console.log(generateState.parcels.map(p => JSON.stringify(p)).join('\n'));

runRobot(generateState, goalOrientedRobot, []);