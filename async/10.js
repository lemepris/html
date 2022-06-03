
const fs = require('fs')
const promisify = require('util').promisify;
const readFile = promisify(fs.readFile);

async function run () {
    let r1 = await readFile('./txt/1.txt', 'utf-8');
    let r2 = await readFile('./txt/2.txt', 'utf-8');
    let r3 = await readFile('./txt/3.txt', 'utf-8');
    console.log(r1, r2, r3);
}
run();