const http = require('http');

const port = process.env.PORT || 3000;

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('ISKCON website is running');
}).listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);
});
