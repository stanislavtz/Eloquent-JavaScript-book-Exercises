import State from '../models/State.js';
import KEYS_NAMES from '../constants/keyNames.js';
import trackKeys from '../utils/helpers/keyTracker.js';

import runAnimation from './animation.js';

const arrowKeys = trackKeys(KEYS_NAMES);

function runLevel(level, Display) {
    let display = new Display(document.body, level);
    let state = State.start(level);
    let ending = 1;

    return new Promise(resolve => {
        runAnimation(time => {
            state = state.update(time, arrowKeys);
            display.syncState(state);

            if (state.status == "playing") {
                return true;
            } else if (ending > 0) {
                ending -= time;
                return true;
            } else {
                display.clear();
                resolve(state.status);
                return false;
            }
        });
    });
}

export default runLevel;