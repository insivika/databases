const mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'chat',
  debug: true,
  insecureAuth: true
});

con.connect((err) =>{
  console.log('Attempting to connect..');
  if (err) { throw err; }
  console.log('Connected!');
});

con.on('error', (err) => {
  console.error('A mysql error has : ', err);
});

module.exports = con;
