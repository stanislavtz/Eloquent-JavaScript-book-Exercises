import domEleCreator from "./domElement.js";

export const scale = 20;

export function drawGrid(level) {
  return domEleCreator("table", {
    class: "background",
    style: `width: ${level.width * scale}px`
  }, ...level.rows.map(row =>
    domEleCreator("tr", {style: `height: ${scale}px`},
        ...row.map(type => domEleCreator("td", {class: type})))
  ));
}

export function drawActors(actors) {
  return domEleCreator("div", {}, ...actors.map(actor => {
    let rect = domEleCreator("div", {class: `actor ${actor.type}`});
    rect.style.width = `${actor.size.x * scale}px`;
    rect.style.height = `${actor.size.y * scale}px`;
    rect.style.left = `${actor.pos.x * scale}px`;
    rect.style.top = `${actor.pos.y * scale}px`;
    return rect;
  }));
}