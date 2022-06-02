const a = 1;
console.log(a);
const fn = (v) => v + 10;
console.log(fn(3));
if (true) {
    console.log('hello, world!');
}
var foo = process.argv.slice(2).toString();
switch (foo) {
    case 'init':
        console.log('你需要init该文件！');
        break;
    case 'install':
        console.log("正在安装！");
        break;
    case 'uninstall':
        console.log('卸载');
        break;

}