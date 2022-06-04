const template = require('art-template')
const path = require('path')
const html = template(path.join(__dirname, '/views/04.art'), {

})
console.log(html);