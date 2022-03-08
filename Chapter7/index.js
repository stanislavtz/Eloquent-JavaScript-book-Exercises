const State = require('./Village/State');

const runRobot = require('./Utils/run-robot.js');
const goalOrientedRobot = require('./Utils/goal-oriented-robot.js');

const generateState = State.random();

runRobot(generateState, goalOrientedRobot, []);