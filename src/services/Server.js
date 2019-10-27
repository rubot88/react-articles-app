const http = require('http');
const articles = require('../articles.json');

http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.url === '/articles') {       
        res.end(JSON.stringify(articles));
    }
}).listen(3000, '127.0.0.1', () => console.log('Server is listening on port:' + 3000));