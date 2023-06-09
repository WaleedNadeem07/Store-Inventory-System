var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'dbgroup13.mysql.database.azure.com',
    database : 'project',
    user     : 'abdullah42@dbgroup13',
    password : 'dbGroup13',
});
/*
var connection = mysql.createConnection({
    host     : 'localhost',
    database : '2',
    user     : 'root',
    password : '123',
});
*/

connection.connect(function(err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }

    console.log('Connected as id ' + connection.threadId);
});

connection.end();

