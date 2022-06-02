//对于系统模块的引入
const fs = require('fs');
//调用fs下面读取文件的API
fs.readFile('./test.html', 'utf-8', (err, doc) =>{
    if(err == null){
        console.log(doc);
    }else {
        throw '123';
    }
})