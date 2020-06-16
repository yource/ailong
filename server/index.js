const https = require('https');
const http = require('http');
const fs = require('fs');
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Methods', 'POST, GET');
	res.header('Access-Control-Allow-Credentials', 'ture');
	next();
})

app.use(express.static(path.join(__dirname, 'website')));

// app.get('/', function(req, res) {
// 	console.log(request.path)
// 	fs.readFile("./website/" + request.path.substr(1), function(err, data) {
// 		if (err) {
// 			res.status(200).send("NOT FUOUND");
// 		} else {
// 			response.writeHead(200, {
// 				"Content-Type": "text/html"
// 			});
// 			response.write(data.toString());
// 		}
// 		response.end();
// 	});
// })


// if (process && process.env && process.env.NODE_ENV === "development") {
//开发环境下启用http服务
var server = http.createServer(app);
server.listen(80);
console.log("http listern 80")
// } else {

//     // 读取证书文件
//     const options = {
//         key: fs.readFileSync('./cert/2_yangxiang.fun.key'),
//         cert: fs.readFileSync('./cert/1_yangxiang.fun_bundle.crt')
//     };

//     // 创建https服务
//     var server = https.createServer(options, app);
//     server.listen(443);
//     console.log("https listern 443")

//     // 创建http服务，重定向到https
//     http.createServer((req, res) => {
//         res.writeHead(301, { 'Location': 'https://yangxiang.fun/' });
//         res.end();
//     }).listen(80);
// }
