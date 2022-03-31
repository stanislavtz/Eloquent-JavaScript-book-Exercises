function trailSquare() {
    const square = document.querySelector('.trail');
    square.addEventListener('click', changeColor);

    function changeColor(e) {
        console.log(e.target);
    }
}

trailSquare();