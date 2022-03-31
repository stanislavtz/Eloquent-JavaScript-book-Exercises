import Actor from "./Actor.js";
import Vec from "../Vector.js";

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

export default Lava;