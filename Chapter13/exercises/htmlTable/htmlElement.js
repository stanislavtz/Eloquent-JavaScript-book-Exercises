const MOUNTAINS = [
    { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
    { name: "Everest", height: 8848, place: "Nepal" },
    { name: "Mount Fuji", height: 3776, place: "Japan" },
    { name: "Vaalserberg", height: 323, place: "Netherlands" },
    { name: "Denali", height: 6168, place: "United States" },
    { name: "Popocatepetl", height: 5465, place: "Mexico" },
    { name: "Mont Blanc", height: 4808, place: "Italy/France" }
];

// function createHtmlElement(name, children) {
//     if (children?.length < 1) {
//         return document.createElement(name);
//     }

//     const element = document.createElement(name);
//     children?.forEach(el => {
//         const tagName = document.createElement(el.name);
//         element.appendChild(tagName);
//         return createHtmlElement(el.name, el.children);
//     });
// }

const mountainsDivEl = document.querySelector('#mountains');
mountainsDivEl.textContent = '';

const table = document.createElement('table');
const tr = document.createElement('tr');

Object.keys(MOUNTAINS[0]).forEach(header => {
    const th = document.createElement('th');
    th.textContent = header;
    tr.appendChild(th);
});

table.appendChild(tr);

const tableBody = MOUNTAINS.map(mountain => {
    const tr = document.createElement('tr');

    Object.values(mountain).forEach((value) => {
        const td = document.createElement('td');
        td.textContent = value;
        tr.appendChild(td);
    });
    return tr;
});

table.append(...tableBody);

mountainsDivEl.appendChild(table);