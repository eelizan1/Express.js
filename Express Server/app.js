// http module 
const http = require('http');

// localhost and port
const hostname = '127.0.0.1';
const port = 3000;

// create server
const server = http.createServer((req, res) => {
    // routing 
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});


// serving running at - host : port 
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});