
const http = require('http'),
    fs = require('fs');

fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }
    http.createServer((req, res) =>
    {
        //response type
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(html);
        //send back response
        res.end();
    }).listen(3000, '127.0.0.1'); 
    console.log('Started in server port 3000');
});