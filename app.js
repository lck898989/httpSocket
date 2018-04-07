// var express = require('express');
// var app = express();
// var http = require('http').Server(app);
var sqlmodule = require('./sql');
var shotLind = require('./shotService');
var io = require('socket.io')();

console.log("io is " + io);
io.listen(3000);
// const Server = require('socket.io');
// const io = new Server();
// app.use(express.static(__dirname + '/public'));
var sqlResult = [];
sqlResult = sqlmodule.checkSql('select count(1) from listore_user');
console.log("sqlResult is " + sqlResult);
function User(){

}
io.on('connection',function(socket){
    console.log('a user connected');
    console.log("socket is " +socket);
    socket.emit('connected','已经链接到服务器');
    socket.on('login',function(msg){
        console.log("in the server app.js msg is " + msg);
    });
});
console.log("listenning to port 3000");