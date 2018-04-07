var mysql = require('mysql');
var sqlModule = {
    //建立与数据库的链接方法
    connectMysql : function(){
        //建立与数据库的链接
        var connection = mysql.createConnection({
            host     : 'localhost',
            user     : 'root',
            password : 'lck8989',
            port     : '3306',
            database : 'user',
        });
        connection.connect();
        return connection;
    },
   //查询方法
    checkSql : function(sqlString){
            var connection = this.connectMysql();
            console.log("sqlString is " +sqlString);
            //开始查询
            var sqlResult = connection.query(sqlString,function(err,result){
                if(err){
                    console.log(err.message);
                    return;
                }
                console.log("**************select************");
                console.log(result);
                console.log("********************************");
                return result;
            });
            connection.end();
            console.log(connection.state);
            console.log("sqlResult is " + sqlResult);
            return sqlResult;
        },
    //插入数据新方法    
    insertSql : function(sqlString,paramsList){
        //链接数据库
        var connection = this.connectMysql();
        var addSqlParms = [paramsList[0],paramsList[1]];
        var isInsert = connection.query(sqlString,addSqlParms,function(err,result){
            if(err){
                console.log("插入错误");
                return;
            }
            console.log("**************insert**************");
            console.log("Insert result is " + result);
            console.log("************insert end************");
        });
        console.log("插入数据：" + isInsert);
        connection.end();
    }    
}
module.exports = sqlModule;