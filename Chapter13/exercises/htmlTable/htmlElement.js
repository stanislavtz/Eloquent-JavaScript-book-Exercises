const MOUNTAINS = [
    { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
    { name: "Everest", height: 8848, place: "Nepal" },
    { name: "Mount Fuji", height: 3776, place: "Japan" },
    { name: "Vaalserberg", height: 323, place: "Netherlands" },
    { name: "Denali", height: 6168, place: "United States" },
    { name: "Popocatepetl", height: 5465, place: "Mexico" },
    { name: "Mont Blanc", height: 4808, place: "Italy/France" }
];

function createHtmlElement(name, children) {
    if (children?.length < 1) {
        return document.createElement(name);
    }

    const element = document.createElement(name);
    children?.forEach(el => {
        const tagName = document.createElement(el.name);
        element.appendChild(tagName);
        return createHtmlElement(el.name, el.children);
    });
}

const body = document.querySelector('body');
// body.appendChild(createHtmlElement('table', [
//     {name: 'th', children: [
//         {name: 'td'},
//         {name: 'td'},
//         {name: 'td'},
//     ]}
// ]));


const table = document.createElement('table');
for (let i = 0; 1 < 3; i++) {
    const th = document.createElement('th');
    switch (i) {
        case 0:
            th.textContent = 'name';
            break;
        case 1:
            th.textContent = 'height';
            break;
        case 2:
            th.textContent = 'place';
            break;
    }
    
}