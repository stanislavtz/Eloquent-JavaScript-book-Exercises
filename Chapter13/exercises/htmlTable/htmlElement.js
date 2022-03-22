const MOUNTAINS = [
    { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
    { name: "Everest", height: 8848, place: "Nepal" },
    { name: "Mount Fuji", height: 3776, place: "Japan" },
    { name: "Vaalserberg", height: 323, place: "Netherlands" },
    { name: "Denali", height: 6168, place: "United States" },
    { name: "Popocatepetl", height: 5465, place: "Mexico" },
    { name: "Mont Blanc", height: 4808, place: "Italy/France" }
];

function createHtmlElement(node, textContent, children) {
    const element = document.createElement(node);
    element.textContent = textContent || '';

    if (!children || children.length < 1) {
        return element;
    }

    for (const child of children) {
        const el = createHtmlElement(child.node, child.textContent, child.children);
        element.appendChild(el);
    }

    return element;
}

const mountainsDivEl = document.querySelector('#mountains');
mountainsDivEl.textContent = '';

const tableHeader = Object.keys(MOUNTAINS[0]).map(x => Object.create({ node: 'th', textContent: x, children: '' }));
console.log(tableHeader);

const tableBody = MOUNTAINS.map(mountain => {
    const collection = Object.values(mountain).map(obj => {
        const newObj = {
            node: 'td', 
            textContent: obj, 
            children: ''
        }

        return newObj;
    });

    return collection;
});

console.log(tableBody);

const table = createHtmlElement('table', '', [
    {
        node: 'tr',
        textContent: '',
        children: tableHeader
    },
    {
        node: 'tr',
        textContent: '',
        children: tableBody
    }
])

// const table = document.createElement('table');
// const tr = document.createElement('tr');

// Object.keys(MOUNTAINS[0]).forEach(header => {
//     const th = document.createElement('th');
//     th.textContent = header;
//     tr.appendChild(th);
// });

// table.appendChild(tr);

// const tableBody = MOUNTAINS.map(mountain => {
//     const tr = document.createElement('tr');

//     Object.values(mountain).forEach((value) => {
//         const td = document.createElement('td');
//         td.textContent = value;
//         tr.appendChild(td);
//     });
//     return tr;
// });

// table.append(...tableBody);

console.log(table)
mountainsDivEl.appendChild(table);