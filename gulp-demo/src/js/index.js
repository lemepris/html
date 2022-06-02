var a = 10;
console.log(a);
function fn() {
    return function f1() {
        return {
            time: new Date(),
        }
    }
}
var f1 = fn();
var f2 = f1();
console.log(f2);