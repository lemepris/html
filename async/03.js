const f1 = function (callback) {
    //干某件异步操作，然后获得结果，结果放到回调函数中去，这样就可以拿到异步操作的值了
    setTimeout(() => {
         //异步操作定时器结果为一个对象，现在想要拿到这个对象，只要把这个对象扔进callback中
         callback({
            msg: '123',
        });
    },1000)
    
}
f1(function (name) {
    console.log('回调函数调用了！');
    console.log(name);
})
// const getMsg = () => {
//     setTimeout(() => {
//         return {
//             msg: 'node.js',
//         }
//     }, 2000);
// }
// const fn = getMsg();
// console.log(fn);