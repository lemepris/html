const template = require('art-template')
const html = template(__dirname + '/views/03.art', {
    user: [{
            name: 'zhangsan',
            age: 24,
            sex: 'male',
        },
        {
            name: 'lisi',
            age: 18,
            sex: 'female',
        },
        {
            name: 'marry',
            age: 42,
            sex: 'female',
        }
    ]
});
console.log(html);