import Vec from "../Vector.js";
import Actor from "./Actor.js";

class Player extends Actor{
    constructor(pos, speed) {
        super(pos, speed);
    }

    static create(pos) {
        let position = pos.plus(new Vec(0, -0.5));
        let speed = new Vec(0, 0);
        return new Player(position, speed);
      }
}

Player.prototype.size = new Vec(0.8, 1.5);

export default Player;