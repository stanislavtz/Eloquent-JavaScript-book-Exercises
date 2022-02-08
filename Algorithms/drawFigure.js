const asterisk = '*';
const cluster = '#';

function draw(n) {
    if(n < 1) {
        return
    }

    console.log(asterisk.repeat(n));
    draw(n-1);
    console.log(cluster.repeat(n));
}

draw(7);