import Actor from "./Actor.js";
import Vec from "../Vector.js";
import State from "../State.js";

class Lava extends Actor {
    constructor(pos, speed, reset) {
        super(pos, speed);
        this.reset = reset;
    }

    static create(pos, ch) {
        switch (ch) {
            case '=':
                return new Lava(pos, new Vec(2, 0));
            case '|':
                return new Lava(pos, new Vec(0, 2));
            case 'v':
                return new Lava(pos, new Vec(0, 3), pos);
            default:
                break;
        }
    }
}

Lava.prototype.size = new Vec(1, 1);

Lava.prototype.collide = function (state) {
    return new State(state.level, state.actors, "lost");
};

Lava.prototype.update = function (time, state) {
    let newPos = this.pos.plus(this.speed.times(time));

    if (!state.level.touches(newPos, this.size, "wall")) {
        return new Lava(newPos, this.speed, this.reset);
    } else if (this.reset) {
        //Check how it works
        return new Lava(this.reset, this.speed, this.reset);
    } else {
        return new Lava(this.pos, this.speed.times(-1));
    }
};

export default Lava;