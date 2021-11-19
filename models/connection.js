const mysql = require('mysql2/promise');

const connection = mysql.createPool({
	user: 'root',
	password: 'Lucas9852@',
	host: 'localhost',
	database: 'soccer_teams',
});

module.exports = connection;