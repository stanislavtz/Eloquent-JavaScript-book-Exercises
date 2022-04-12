const { createServer } = require('http');

const port = 8080;
const greeting = 'Hello world!';
const pTag = 'I am a paragraph tag';
const hrefURL = `https://google.bg`;

const body = (`
        <h1>${greeting}</h1>
        <p>${pTag}</p>
        <a href=${hrefURL}>click me</a>
    `);

const server1 = createServer((req, res) => {
    res.writeHead(200, {'content-type' : 'text/html'});
    res.write(body, 'utf-8');
    res.end();
});

let server = createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    // console.log(request)
    response.write(`
    <h1>Hello!</h1>
    <p>You asked for <code>${request.method}</code></p>`);
    response.end();
});
server.listen(8000);
console.log("Listening! (port 8000)");

server1.listen(port, () => console.log(`Server is running on port ${port}...`));