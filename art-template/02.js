const template  = require('art-template');
const path = require('path');

const html = template(path.join(__dirname, 'views/02.art'), {
    data: {
        name: 'zhangsan',
        age: 27,
    },
    content: '<h1>Nihao</h1>',
    age: 13,
})
console.log(html);