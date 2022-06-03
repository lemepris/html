async function fn() {
    throw '发生了错误';
    return {
        'name': 'zhangsan',
        'age': 18,
    };
}
// console.log(fn());
fn().catch(result => console.log(result));
const path = require('path')
const fs = require('fs');
async function fn1() {
    return new Promise((resolve, reject) => {
        
    });
}
async function fn2() {
    return 'p2';
}
async function fn3() {
    return 'p3';
}

async function fn2 () {
    let a = await fn1();
    console.log(a);
}
console.log(fn1());
console.log(fn2());
async function run () {
    let r1 = await fn1();
    let r2 = await fn2();
    let r3 = await fn3();
    console.log(r1);
    console.log(r2);
    console.log(r3);
}
// run();