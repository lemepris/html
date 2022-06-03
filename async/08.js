// const fs = require('fs')
// let promise1 = new Promise((resolve, reject) => {
//     fs.readFile('./txt/100.txt', 'utf-8', (err, doc) => {
//         if (err != null) {
//             reject(err);
//         } else {
//             resolve(doc);
//         }

//     })
// })
// promise1.then(result => console.log(result))
//         .catch(result => console.log(result))
// let promise2 = new Promise((resolve, reject) => {
//     fs.readFile('./txt/2.txt', 'utf-8', (err, doc) => {
//         if (err != null) {
//             reject(err);
//         }
//         resolve(doc);
//     })
// })
// promise2.then(result => console.log(result))
//         .catch(result => console.log(result))
// let promise3 = new Promise((resolve, reject) => {
//     fs.readFile('./txt/3.txt', 'utf-8', (err, doc) => {
//         if (err != null) {
//             reject(err);
//         }
//         resolve(doc);
//     })
// })
// promise3.then(result => console.log(result))
//         .catch(result => console.log(result))
//为了控制顺序，采用下面的方式
const path = require('path')
const fs = require('fs')

function fn1() {
    return promise1 = new Promise((resolve, reject) => {
        fs.readFile('./txt/1.txt', 'utf-8', (err, doc) => {
            if (err != null) {
                reject();
            } else {
                resolve(doc);
            }
        })
    });

}
function fn2() {
    return promise2 = new Promise((resolve, reject) => {
        fs.readFile('./txt/2.txt', 'utf-8', (err, doc) => {
            if (err != null) {
                reject();
            } else {
                resolve(doc);
            }
        })
    });
}

function fn3() {
    return promise3 = new Promise((resolve, reject) => {
        fs.readFile('./txt/3.txt', 'utf-8', (err, doc) => {
            if (err != null) {
                reject();
            } else {
                resolve(doc);
            }
        })
    });
}

fn1().then(result => {
        console.log(result);
        return fn2();
    }).then(result => {
        console.log(result);
        return fn3();
    }).then(result => {
        console.log(result);
    })