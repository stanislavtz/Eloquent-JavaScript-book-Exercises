class State {
    constructor(level, actors, status) {
        this.level = level;
        this.actors = actors;
        this.status = status;
    }

    get player() {
        return this.actors.find(a => a.type === 'player');
    }

    static start(level) {
        return new State(level, level.startActors, "playing");
    }
}

export default State;