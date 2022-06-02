const http = require('http')
const url = require('url')
const app = http.createServer();
app.on('request', (req, res) => {
    const pathname = url.parse(req.url).pathname;
    console.log(pathname);
    res.end(pathname);
})
app.listen(80);
// localhost/ == localhost
// localhost/index == /localhost/index?xxxx
// localhost/index !== /localhost/index.html
// localhost/index !== /localhost/index/