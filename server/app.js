const http = require('http')
const url = require('url')
const queryString = require('querystring')
const { type } = require('os')
const app = http.createServer()
    //当客户端有请求来的时候，就会触发这个事件
app.on('request', (req, res) => {


    res.writeHead(200, {
        'content-type': 'text/html;charset=utf-8'
    });
    //console.log(req.method);
    //console.log(req.url);
    const { query, pathname } = url.parse(req.url, true);
    //  console.log(query);
    //  console.log(query.name);
    //  console.log(query.age);
    let params = '';
    req.on('data', (data) => {
        params += data;
    })
    req.on('end', () => {

            console.log(queryString.parse(params));
        })
        // console.log(req.headers['accept']);
    if (req.method == 'GET') {
        if (pathname == '/' || pathname == '/index') {
            res.end("<h1>欢迎来到首页！</h1>");
        } else if (pathname == '/list') {
            res.end('<p>欢迎来到列表页面</p>');
        } else {
            res.end('not found this url');
        }
    }else if (req.method == 'POST') {
        if (pathname == '/' || pathname == '/index') {
            res.end("<h1>this is list.html</h1>");
        } else if (pathname == '/list') {
            res.end('this is index.html');
        } else {
            res.end('not found this url');
        }
    }


    // if(req.method == 'POST') {
    //     res.end('post');
    // }else {
    //     res.end('get');
    // }

})
app.listen(80)
console.log('网站服务器已经启动，请输入localhost进行访问!');
// Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
// Accept-Encoding: gzip, deflate, br
// Accept-Language: en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7
// Cache-Control: max-age=0
// Connection: keep-alive
// Cookie: BAIDUID=5DD8B9C39E21C94AAFE55404FCD09052:FG=1; BIDUPSID=5DD8B9C39E21C94AAFE55404FCD09052; PSTM=1649901251; BD_UPN=12314753; BDUSS=0VNTi1JaXNseTQ4YU8tVHFsNnJEd3I0YlcyeUNsMG45T3l0c0R1cFBIT3hNYXhpRVFBQUFBJCQAAAAAAAAAAAEAAAAMxYGtaDE3NjIzNjkwMzUxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALGkhGKxpIRiT; BDUSS_BFESS=0VNTi1JaXNseTQ4YU8tVHFsNnJEd3I0YlcyeUNsMG45T3l0c0R1cFBIT3hNYXhpRVFBQUFBJCQAAAAAAAAAAAEAAAAMxYGtaDE3NjIzNjkwMzUxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALGkhGKxpIRiT; ispeed_lsm=2; BDORZ=B490B5EBF6F3CD402E515D22BCDA1598; BA_HECTOR=0485250l0hal0g04ah1h9ehcd14; ZFY=V13Jgtl68YEpGBq9YcyDJZyqYVCkOA:BCW52lYW0I20w:C; channel=baidusearch; baikeVisitId=46715752-a14d-4cbe-ba63-67a64decf7ee; BAIDUID_BFESS=28EADA65D315750342BD2E58433986E1:FG=1; BD_HOME=1; H_PS_PSSID=36429_36505_36454_31254_34812_35915_36166_36488_36518_36055_36519_36235_26350_36469_36315; sugstore=1
// Host: www.baidu.com
// sec-ch-ua: " Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"
// sec-ch-ua-mobile: ?0
// sec-ch-ua-platform: "Windows"
// Sec-Fetch-Dest: document
// Sec-Fetch-Mode: navigate
// Sec-Fetch-Site: none
// Sec-Fetch-User: ?1
// Upgrade-Insecure-Requests: 1
// User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.63 Safari/537.36
const str = '/index?name=zhangsan&age=20';
// 如何得到 /index ? {name: zhangsan, age: 20};

//console.log(str.slice(str.indexOf('?')+1));