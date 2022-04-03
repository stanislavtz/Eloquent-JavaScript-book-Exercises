import Actor from "./Actor.js";
import Vec from "../Vector.js";
import { PLAYER_X_SPEED, JUMP_SPEED, GRAVITY } from '../../constants/player.js';

class Player extends Actor {
    constructor(pos, speed) {
        super(pos, speed);
    }

    static create(pos) {
        let position = pos.plus(new Vec(0, -0.5));
        let speed = new Vec(0, 0);
        return new Player(position, speed);
    }

    static LIVES = 3;
}

Player.prototype.size = new Vec(0.8, 1.5);

Player.prototype.update = function (time, state, keys) {
    let xSpeed = 0;
    if (keys.ArrowLeft) { xSpeed -= PLAYER_X_SPEED; }
    if (keys.ArrowRight) { xSpeed += PLAYER_X_SPEED; }

    let pos = this.pos;
    let movedX = pos.plus(new Vec(xSpeed * time, 0));
    if (!state.level.touches(movedX, this.size, "wall")) {
        pos = movedX;
    }

    let ySpeed = this.speed.y + time * GRAVITY;
    let movedY = pos.plus(new Vec(0, ySpeed * time));
    if (!state.level.touches(movedY, this.size, "wall")) {
        pos = movedY;
    } else if (keys.ArrowUp && ySpeed > 0) {
        ySpeed = -JUMP_SPEED;
    } else {
        ySpeed = 0;
    }

    return new Player(pos, new Vec(xSpeed, ySpeed));
};

export default Player;