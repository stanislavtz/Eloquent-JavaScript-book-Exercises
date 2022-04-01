import domEleCreator from "./domElement";

const scale = 20;

function drawGrid(level) {
  return domEleCreator("table", {
    class: "background",
    style: `width: ${level.width * scale}px`
  }, ...level.rows.map(row =>
    domEleCreator("tr", {style: `height: ${scale}px`},
        ...row.map(type => domEleCreator("td", {class: type})))
  ));
}

export default drawGrid;