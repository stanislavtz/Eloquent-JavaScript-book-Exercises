class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(newVec) {
        let x = this.x + newVec.x;
        let y = this.y + newVec.y;
        return new Vec(x, y);
    }

    times(factor) {
        return new Vec(this.x * factor, this.y * factor);
    }
}

export default Vec;