import Vec from "./Vector";

class Player {
    constructor(pos, speed) {
        this.pos = pos;
        this.speed = speed;
    }

    // type = () => 'player';
    get type() {return 'player'}

    static create(pos) {
        let position = pos.plus(new Vec(0, -0.5));
        let speed = new Vec(0, 0);
        return new Player(position, speed);
      }
}

Player.prototype.size = new Vec(0.8, 1.5);

export default Player;