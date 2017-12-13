var mysql = require('mysql');

var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '01120606'

    });

var tips = [];

connection.query('CREATE DATABASE IF NOT EXISTS main', function (err) {
    if (err) throw err;
    connection.query('USE main', function (err) {
        if (err) throw err;
        connection.query('CREATE TABLE IF NOT EXISTS users('
            + 'id INT NOT NULL AUTO_INCREMENT,'
            + 'PRIMARY KEY(id),'
            + 'name VARCHAR(30),'
            + 'pass VARCHAR(30)'
            +  ')', function (err) {
                if (err) throw err;
            });
        connection.query('CREATE TABLE IF NOT EXISTS userInfo('
            + 'id INT NOT NULL AUTO_INCREMENT,'
            + 'PRIMARY KEY(id),'
            + 'name VARCHAR(30),'
            + 'tMain int,'
            + 'tLiving int,'
            + 'tKitchen int,'
            + 'tBedroom1 int,'
            + 'tBedroom2 int'
            +  ')', function (err) {
                if (err) throw err;
            });

        connection.query('CREATE TABLE IF NOT EXISTS tips('
            + 'name VARCHAR(6),'
            + 'PRIMARY KEY (name),'
            + 'value int'
            + ')', function (err) {
                if (err) throw err;
            });

        connection.query('SELECT * FROM tips', function (error, results, fields){
            console.log(results);
        });

        // for(var i=1;i<17;i++){
        //     connection.query('INSERT INTO tips (name,value) VALUES (?,?)',['tip'+i,0], function (err) {
        //         if (err) throw err;
        //     });
        // }

        // connection.query('INSERT INTO users (name,pass) VALUES (?,?)',['Dimitar','root'], function (err) {
        //         if (err) throw err;
        //     });
        // connection.query('INSERT INTO userInfo(name,tMain,tLiving,tKitchen,tBedroom1,tBedroom2)'
        //          + 'VALUES (?, ?, ?, ?, ?, ?)',["Dimitar",19,19,20,19,17], function (err) {
        //         if (err) throw err;
        //     });
        

    });
});
module.exports = connection;