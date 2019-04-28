'user strict';
const mysql = require('mysql');

// local mysql db connection
const connection = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,

});

connection.connect(function(err) {
  console.log(process.env.MYSQL_PORT);
  if ( err ) {
    console.error('error connecting: ' + err.stack);
    return process.exit(22);
  } else {
    console.error('Conexion a la DB establecida.');
  }
});

module.exports = connection;
