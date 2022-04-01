import Level from './models/Level.js';
import State from './models/State.js';
import DOMDisplay from './models/DomDisplay.js';
import simpleLevelPlan from './utils/levelUtils/levelPlan.js';
import Actor from './models/actors/Actor.js';
import Player from './models/actors/Player.js';
import Lava from './models/actors/Lava.js';

let simpleLevel = new Level(simpleLevelPlan);
console.log(simpleLevel.startActors);
console.log(simpleLevel.rows);
let display = new DOMDisplay(document.body, simpleLevel);
display.syncState(State.start(simpleLevel));