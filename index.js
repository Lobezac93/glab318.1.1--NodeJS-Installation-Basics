const { prototype } = require('events');
const http = require('http');

const hostname = '127.0.0.1';
const PORT = 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200
//     res.setHeader('Content-Type', 'text/plain')
//     res.end('Hello World')
// })


const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.write('<h1 style= "color:red">Platypus</h1>')
    res.write('<p>glow under the uv light </p>')
})


server.listen(PORT, hostname, () => {
    console.log(`Server is running on http://${hostname}:${PORT}`);
    
})