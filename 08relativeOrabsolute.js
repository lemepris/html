const fn = require("fs");
const path = require("path");
console.log(__dirname);
console.log(path.join(__dirname, '08relativeOrabsolute.js'));
fn.readFile(path.join(__dirname, '08relativeOrabsolute.js'), 'utf-8', (err, doc) => {
    console.log(err);
    console.log(doc);
})
