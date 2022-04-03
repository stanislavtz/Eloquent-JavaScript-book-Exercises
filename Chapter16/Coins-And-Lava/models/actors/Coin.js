import Actor from "./Actor.js";
import Vec from "../Vector.js";
import State from "../State.js";
import { WOBBLE_SPEED, WOBBLE_DIST } from '../../constants/coins.js';

class Coin extends Actor {
    constructor(pos, basePos, wobble) {
        super(pos);
        this.basePos = basePos;
        this.wobble = wobble;
    }

    static create(pos) {
        let basePos = pos.plus(new Vec(0.2, 0.1));
        let wobble = Math.random() * Math.PI * 2;
        return new Coin(basePos, basePos, wobble);
    }
}

Coin.prototype.size = new Vec(0.6, 0.6);

Coin.prototype.collide = function (state) {
    let filtered = state.actors.filter(actor => actor != this);
    let status = state.status;

    if (!filtered.some(a => a.type == 'coin')) {
        status = 'won';
    }

    return new State(state.level, filtered, status);
}

Coin.prototype.update = function (time) {
    let wobble = this.wobble + time * WOBBLE_SPEED;
    let wobblePos = Math.sin(wobble) * WOBBLE_DIST;

    return new Coin(this.basePos.plus(new Vec(0, wobblePos)), this.basePos, wobble);
};

export default Coin;