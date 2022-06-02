const fs = require('fs');
const content = `
    <!DOCTYPE html>
    <html lang='en'>
        <head>
            <title>writeFile操作</title>
        </head>
        <body>
            <h1>fs.readFile</h1>
        </body>
    </html>
    <script>
        let a = 10;
        let fn = (v)=>v+10;
        console.log(a, fn);
    </script>
            `;
fs.writeFile('./test.html', content, (err, doc) => {
    if(err != null) {
        console.log(err);
        return ;
    }
    console.log('写入文件成功')
} )