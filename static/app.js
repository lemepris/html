const http = require('http')
const url = require('url')
const fs = require('fs')
const path = require('path')
const mime = require('mime')
const { fstat } = require('fs')
const app = http.createServer()
app.on('request', (req, res) => {
    let {pathname} = url.parse(req.url);
    pathname = pathname == '/'? 'index.html': pathname;
    console.log(path.join(__dirname, pathname));
    console.log(mime.getType(path.join(__dirname, pathname)));
    let type = mime.getType(path.join(__dirname, pathname));
    fs.readFile(path.join(__dirname,  pathname), 'utf-8', (err, doc) => {
        if(err != null) {
            res.writeHead(404, {
                'content-type': 'text/html;charset=utf-8'
            })
            res.end('文件读取失败');
            return ;
        }
        res.writeHead(200, {
            'content-type': type,
        })
        res.end(doc);
    })
    
})
app.listen(80);
console.log('网站服务器启动成功');