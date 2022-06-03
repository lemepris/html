const getMsg = () => {
    setTimeout(() => {
        return {
            msg: 'node.js',
        }
    }, 2000);
}
const fn = getMsg();
console.log(fn);