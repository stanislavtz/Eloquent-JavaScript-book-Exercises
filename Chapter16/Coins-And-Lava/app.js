import DOMDisplay from './models/DomDisplay.js';
import { GAME_LEVELS } from './constants/levels.js';
import runGame from './interfaces/game.js';

runGame(GAME_LEVELS, DOMDisplay);