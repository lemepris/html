const template = require('art-template')
const path = require('path')


template.defaults.root = path.join(__dirname, '/views');
template.defaults.exname = '.html';
const html = template('06', {
    time: new Date(),
})
console.log(template('07.html'), {});
