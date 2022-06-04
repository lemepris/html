const template = require('art-template')
const path = require('path')
const html = template(path.join(__dirname, '/views/05.art'), {
    data: {
        name: 'zhangsan',
        age: 27,
    },
    msg: '首页模板',
})
console.log(html);