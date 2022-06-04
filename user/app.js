const { fstat } = require('fs');
const http = require('http')
const mongoose = require('mongoose')
const app = http.createServer();
const url = require('url');
mongoose.connect('mongodb://localhost:27017/playground')
    .then(() => console.log('数据库连接成功'))
const User = mongoose.model('User', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 10,
    },
    age: {
        type: Number,
        min: 18,
        max: 80,
    },
    password: String,
    email: String,
    hobbies: [String],
}))
app.on('request', async(req, res) => {
    const method = req.method;
    const { pathname } = url.parse(req.url, true);
    res.writeHead(200, {
        'content-type': 'text/html;charset=utf-8'
    })
    if (method == 'GET') {
        //呈递用户列表页面
        if (pathname == '/list') {

            res.end('欢迎来到列表页面');
        }
        res.end('ok');
    } else if (method == 'POST') {

    }

})
app.listen(80)
console.log('web网站服务器启动成功')