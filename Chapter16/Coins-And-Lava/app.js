import simpleLevelPlan from './utils/levelPlan.js';
import Level from './models/Level.js';
import Actor from './models/actors/Actor.js';
import Player from './models/actors/Player.js';
import Lava from './models/actors/Lava.js';
// const level = new Level(simpleLevelPlan);

const actor = new Actor(5, 6);
const player = new Player(5, 6);
const lava = new Lava(5, 6, -1);

console.log(actor.type);
console.log(player.type);
console.log(lava.type);