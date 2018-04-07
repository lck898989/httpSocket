var http = require('http');
var url = require('url');
var util = require('util');
var sqlModule = require('./sql');
//创建服务器
http.createServer(function(request,response){
    //发送http头信息
    //http状态值： 200 ： ok
    //内容类型：text/plain
    response.writeHead(200,{'Content-Type':'text/plain;charset=utf-8','Access-Control-Allow-Origin':'*'});
    //解析url参数
    var params = url.parse(request.url,true).query;
    console.log("request.url is " + request.url);
    console.log("params is " + params.toString());
    console.log("用户名是：" + params.username);
    console.log("密码是："+params.password);
    var sqlString = 'select * from user where username='+ "'" + params.username + "'" + ' and password='+ "'" +params.password + "'";
    var userCount = sqlModule.checkSql(sqlString);
    // console.log("userCount is " + userCount.length);
    //发送响应数据 "Hello world"
    var requestStatus = {
        requestSuccess : true,
        msg            : '登录成功',
    }
    //将json对象转换为json字符串
    var responseString = JSON.stringify(requestStatus);
    console.log(responseString);
    response.end(responseString);
}).listen(8888);
console.log("Server running at http://localhost:8888");