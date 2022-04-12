const reverse = require('./showArgs.js');
const { readFile, writeFile, rm } = require('fs').promises;
const { createServer } = require('http');

const greeting = 'Hello World!';
const pTagContent = 'I am a paragraph tag';


const server = createServer((req, res) => {
    const body = `
    <h1>
        ${greeting}
    </h1>
    <p>${pTagContent}</p>
    <a href=${req.url} _blank=true>${req.url}</a>
 `;
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write(body);
    res.end();
});

// const { request } = require("http");
// let requestStream = request({
//     protocol: "http:",
//     hostname: "eloquentjavascript.net",
//     path: "/blablabla",
//     method: "GET",
//     headers: { Accept: "text/html" }
// }, response => {
//     console.log("Server responded with status code", response.statusCode);
// });
// requestStream.end();

server.listen(5000, () => console.log(`URL: http://localhost:${5000} \nServer is running on port ${5000}...`));