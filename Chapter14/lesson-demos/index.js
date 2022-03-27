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
    let pirate = document.querySelector('#pirate');
    let fly = document.querySelector('#fly');
    
    let angle = 0;
    let lastTime = null;
    
    function animate(time) {
        if (lastTime != null) {
            angle += (time - lastTime) * 0.001;
        }

        lastTime = time;
        const pirateX = Math.sin(angle) * 40 + 40;
        const pirateY = Math.cos(angle) * 200;

        const flyX = Math.sin(-angle*2) * 70 - 200;
        const flyY = Math.cos(-angle*2) * 200 - 200;

        pirate.style.top = `${pirateX}px`;
        pirate.style.left = `${pirateY}px`;
        
        fly.style.top = `${flyX}px`;
        fly.style.left = `${flyY}px`;

        requestAnimationFrame(newTime => animate(newTime));
    }
    
    requestAnimationFrame(newTime => animate(newTime));
}

// addHeading(text);

// const bodyEl = document.querySelector('body');
// console.log(findText(bodyEl, 'book'));

movePirate()