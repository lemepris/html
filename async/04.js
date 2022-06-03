console.time('abc');
console.log('start');
for(var i = 0; i < 100000 ; i++) {
    console.log(i);
}
console.log('end');
console.timeEnd('abc');