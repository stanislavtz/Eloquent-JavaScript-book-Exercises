import domEleCreator from "./domElement.js";

import {SCALE, TABLE_ATTRS, ROW_ATTRS} from '../../constants/drawConstants.js';

export const drawGrid = (level) => domEleCreator("table", TABLE_ATTRS(level), ...drawTable(level));

export const drawActors = (actors)  => {
    return domEleCreator("div", {}, ...actors.map(drawActor));
}

function drawTable(lv) {
    return lv.rows.map(drawTableRow);
}

function drawTableRow(row) {
    return domEleCreator("tr", ROW_ATTRS, ...drawTableData(row));
}

function drawTableData(r) {
    return r.map(type => domEleCreator('td', {class: type}));
}

function drawActor(actor) {
    let ele = domEleCreator('div', {class: `actor ${actor.type}`});
    return defineSize(ele, actor);
}

function defineSize(element, figure) {
    element.style.width = `${figure.size.x * SCALE}px`;
    element.style.height = `${figure.size.y * SCALE}px`;
    element.style.left = `${figure.pos.x * SCALE}px`;
    element.style.top = `${figure.pos.y * SCALE}px`;
    return element;
}