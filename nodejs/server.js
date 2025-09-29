const http = require('http');

// create server
const server = http.createServer((req, res) => {

    // set response header
    res.writeHead(200, {'content-type' :'text/plain'});

    // set response
    res.end("Hello!! We are learninh HTTP module");



});

server.listen(3000, () => {
    console.log("server is running at http://localhost:3000");
});