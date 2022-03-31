import Actor from "./Actor.js";

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

export default Coin;