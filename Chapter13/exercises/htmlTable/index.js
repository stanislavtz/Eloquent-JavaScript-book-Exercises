import MOUNTAINS from './constants/mountains.js';
import createHTMLElement from './utilities/createHTMLelement.js';

const mountainsDivEl = document.querySelector('#mountains');
mountainsDivEl.textContent = '';

const columnNames = Object.keys(MOUNTAINS[0]).map(x => 
    Object.create({ node: 'th', textContent: x }));

const tableHeader =  {
    node: 'tr',
    textContent: '',
    children: columnNames
}

const tableBody = MOUNTAINS.map(mountain => {
    return {
        node: 'tr',
        textContent: '',
        children: Object.values(mountain).map(m => 
            Object.create({ node: 'td', textContent: m }))
    }
});

const tableData = [tableHeader, ...tableBody];

const table = createHTMLElement('table', '', tableData);

mountainsDivEl.appendChild(table);