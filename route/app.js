const http = require('http')
const url = require('url')
const app = http.createServer()
app.on('request', (req, res) => {
    const method = req.method.toLowerCase();
    const { pathname } = url.parse(req.url); 
    if (method == 'get') {
        if (pathname == '/' || pathname == '/index') {
            res.writeHead(200, {
                'content-type': 'text/html;charset=utf8'
            })
            res.end('欢迎来到首页')
        } else if (pathname == '/list') {
            res.writeHead(200, {
                'content-type': 'text/html;charset=utf8'
            })
            res.end('欢迎来到列表页')
        } else {
            res.end('<h1>找不到</h1>')
        }
    } else {

    }
})
app.listen(80);
console.log('网站服务器启动成功');