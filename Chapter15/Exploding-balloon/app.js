function inflate() {
    const explosion = ' 💥 ';
    const explodingSize = 100;
    const balloon = document.querySelector('.balloon');

    let boomNote = createBoomNote();
    document.body.appendChild(boomNote);

    let size = 16;
    let isExploded = false;

    window.addEventListener('keydown', arrowKeysEventListener);
    
    function arrowKeysEventListener(e) {
        if (e.key == 'ArrowUp') {
            e.preventDefault();
            if (size >= explodingSize) {
                isExploded = true;
                balloon.textContent = explosion;
                balloon.style['margin-bottom'] = '5px';
                boomNote.style.display = 'block';
                window.removeEventListener('keydown', arrowKeysEventListener);
            }

            size *= 1.1;
        } else if (e.key == 'ArrowDown') {
            e.preventDefault();
            if (isExploded) return;
            if (size <= 15) {
                return size = 16;
            }
            size /= 1.1;
        }

        return balloon.style.fontSize = `${size}px`;
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