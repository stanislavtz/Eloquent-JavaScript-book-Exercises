import domEleCreator from "./domElement.js";

import {scale, tableAttrs, rowAttrs} from '../constants/drawConstants.js';

export const drawGrid = (level) => domEleCreator("table", tableAttrs(level), ...drawTable(level));

export const drawActors = (actors)  => {
    return domEleCreator("div", {}, ...actors.map(drawActor));
}

function drawTable(lv) {
    return lv.rows.map(drawTableRow);
}

function drawTableRow(row) {
    return domEleCreator("tr", rowAttrs, ...drawTableData(row));
}

function drawTableData(r) {
    return r.map(type => domEleCreator('td', {class: type}));
}

function drawActor(actor) {
    let ele = domEleCreator('div', {class: `actor ${actor.type}`});
    return defineSize(ele, actor);
}

function defineSize(element, figure) {
    element.style.width = `${figure.size.x * scale}px`;
    element.style.height = `${figure.size.y * scale}px`;
    element.style.left = `${figure.pos.x * scale}px`;
    element.style.top = `${figure.pos.y * scale}px`;
    return element;
}