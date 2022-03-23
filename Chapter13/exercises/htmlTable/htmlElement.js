import MOUNTAINS from './mountains.js'
import createHTMLElement from './createHTMLelement.js';

const mountainsDivEl = document.querySelector('#mountains');
mountainsDivEl.textContent = '';

const columnNames = Object.keys(MOUNTAINS[0]).map(x => Object.create({ node: 'th', textContent: x }));

const tableHeader =  {
    node: 'tr',
    textContent: '',
    children: columnNames
}

const tableBody = MOUNTAINS.map(mountain => {
    return {
        node: 'tr',
        textContent: '',
        children: Object.values(mountain).map(m => Object.create({ node: 'td', textContent: m }))
    }
});

const tableData = [tableHeader, ...tableBody];

const table = createHTMLElement('table', '', tableData);

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

mountainsDivEl.appendChild(table);