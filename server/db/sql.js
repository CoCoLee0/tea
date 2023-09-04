const mysql = require('mysql');
let connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:"mysql",
	database:'vue_store'
})
module.exports = connection;