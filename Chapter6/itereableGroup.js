class Group {
    constructor() {
        this.collection = [];
    }

    get _collection() {
        return this.collection;
    }

    add(item) {
        if (!this.has(item)) {
            this.collection.push(item);
        }
    }

    delete(item) {
        if (this.has(item)) {
            this.collection = this.collection.filter(x => x !== item)
        }
    }

    has(item) {
        return this.collection.includes(item) ? true : false;
    }

    static from(iter) {
        const gr = new Group();
        
        iter.forEach(el => gr.add(el));

        return gr._collection;
    }
}

class GroupIterator {
    constructor(group) {
        this.group = group;
        this.result = [];
    }

    next() {
        if (this.group.length === 0) {
            return { value: undefined, done: true }
        }

        this.result.push({ value: this.group.shift(), done: false });

        return this.result;
    }
}

Group.prototype[Symbol.iterator] = function () {
    return new GroupIterator(this);
}

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}