const http = require('http');
let url = require('url');

http.createServer((req, resp) => {

    let radius = url.parse(req.url, true).query;
    let result = 2 * radius.radius;
    resp.write("Diameter = " + result);
    resp.end();

}).listen(800);