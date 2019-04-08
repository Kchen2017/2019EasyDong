var mysql  = require('mysql');
const md5 = require('md5');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'my_db'
});
 
connection.md5 = md5;

module.exports = connection;