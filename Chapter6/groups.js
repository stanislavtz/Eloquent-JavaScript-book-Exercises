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

// const group1 = new Group();
// group1.from([10, 20]);
// console.log(group1.has(10));

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
  // → false