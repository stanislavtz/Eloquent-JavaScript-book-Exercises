import drawGrid from "../utils/levelGrid.js";
import domEleCreator from "../utils/domElement.js";

class DOMDisplay{
    constructor(parent, level) {
        this.element = domEleCreator('div', {class: 'game'}, drawGrid(level));
        this.actorLevel = null;
        parent.appendChild(this.element);
    }

    clear = () => this.element.remove();
}

export default DOMDisplay;