class Group {
    constructor() {
        this.collection = [];
    }

    add(item) {
        if(!this.has(item)) {
            this.collection.push(item);
        }
    }

    delete(item) {
        if(this.has(item)) {
            this.collection = this.collection.filter(x => x !== item)
        }
    }

    has(item) {
        return this.collection.includes(item) ? true : false;
    }

    static from(iter) {
        const gr = new Group();
        iter.forEach(el => {
            if(!gr.has(el)) {
                gr.collection.push(el);
            }
        });

        return gr;
    }
}

class GroupIterator {
    constructor(group) {
        this.group = group;
    }

    next() {
        // TO DO ...
        return;
    }
}