function inflate() {
    const explosion = ' 💥 ';
    const explodingSize = 100;
    const balloon = document.querySelector('.balloon');

    let boomNote = createBoomNote();
    document.body.appendChild(boomNote);

    let size = 16;

    window.addEventListener('keydown', arrowKeysListener);
    window.addEventListener('mousedown', clickListener);
    
    function arrowKeysListener(e) {
        e.key == 'ArrowUp' || e.key == 'ArrowDown' 
            ? e.preventDefault()
            : e;

        if (e.key == 'ArrowUp') {
            if (size >= explodingSize) {
                blockListersAction();
            }

            size *= 1.1;
        } else if (e.key == 'ArrowDown') {
            if (size <= 15) {
                return size = 16;
            }
            size /= 1.1;
        }

        return balloon.style.fontSize = `${size}px`;
    }

    function clickListener(e) {
        if(e.button == 0) {
            if(size >= explodingSize){
                blockListersAction();
            }
            size *= 1.1;
        } else if (e.button == 2) {
            if (size <= 15) {
                return size = 16;
            }
            size /= 1.1;
        }

        return balloon.style.fontSize = `${size}px`;
    }

    function blockListersAction() {
        boomNote.style.display = 'block';
        balloon.style['margin-bottom'] = '5px';
        balloon.textContent = explosion;
        window.removeEventListener('keydown', arrowKeysListener);
        window.removeEventListener('mousedown', clickListener);
    }
}

function createBoomNote() {
    let boomNote = document.createElement('p');
    boomNote.className = 'boom-note';
    boomNote.textContent = 'BOOM';
    boomNote.style.display = 'none';

    return boomNote;
}

inflate();