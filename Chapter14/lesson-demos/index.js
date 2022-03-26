const text = 'Hello dear!'

function addHeading(text) {
    const h1Props = {
        className: 'head-one', textContent: text
    }

    const appEl = document.querySelector('#app-id');
    const h1 = document.createElement('h1');
    Object.assign(h1, h1Props);

    return appEl.appendChild(h1);
}

function findText(node, string) {
    if (node.nodeType == Node.ELEMENT_NODE) {
        for (let child of node.childNodes) {
            if (findText(child, string)) {
                return true;
            }
        }
        return false;
    } else if (node.nodeType == Node.TEXT_NODE) {
        return node.textContent.indexOf(string) > -1;
    }
}

function movePirate() {
    let pirate = document.querySelector('p img');
    let angle = Math.PI;

    function animate(time, lastTime) {
        if (lastTime != null) {
            angle += (time - lastTime) * 0.001;
        }
        pirate.style.top = (Math.sin(angle) * 100) + "px";
        pirate.style.left = (Math.cos(angle) * 200) + "px";
        requestAnimationFrame(newTime => animate(newTime, time));
    }
    
    requestAnimationFrame(newTime => animate(newTime, 0));
}

addHeading(text);

const bodyEl = document.querySelector('body');
console.log(findText(bodyEl, 'book'));

movePirate()