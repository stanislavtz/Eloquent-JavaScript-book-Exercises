class Actor {
    constructor(pos, speed) {
        this.pos = pos;
        this.speed = speed;
    }

    get type() {
        const objectType = this.constructor.name;
        return objectType.toLowerCase();
    }
}

export default Actor;