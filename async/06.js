const fs = require('fs');
const path = require('path');
const realPath = path.join(__dirname, 'txt');
console.log(realPath);
fs.readFile(realPath + '/1.txt', 'utf-8', (err, doc) => {
    if (err != null) {
        console.log(err);
    }
    console.log(doc);
    fs.readFile(realPath + '/2.txt', 'utf-8', (err, doc) => {
        if (err != null) {
            console.log(err);
        }
        console.log(doc);
        fs.readFile(realPath + '/3.txt', 'utf-8', (err, doc) => {
            if (err != null) {
                console.log(err);
            }
            console.log(doc);
        })
    })
})