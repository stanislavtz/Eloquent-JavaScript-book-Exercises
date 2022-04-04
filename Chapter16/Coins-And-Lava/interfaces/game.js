import Level from '../models/Level.js';
import Player from '../models/actors/Player.js';
import { GAME_OVER } from '../constants/levels.js';

import runLevel from './level.js';

async function runGame(plans, Display) {
    for (let level = 0; level < plans.length;) {
        let status = await runLevel(new Level(plans[level]), Display);
        if (status == "won") { level++; }
        if (status == "lost") { Player.LIVES--; }
        if (Player.LIVES == 0) { return GAME_OVER() }
    }

    console.log("You've won!");
}

export default runGame;