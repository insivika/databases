const mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

const con = mysql.createConnection({
  host: 'localhost',
  username: 'root',
  password: 'password',
  // database: 'chat',
  insecureAuth: true
});

con.connect((err) =>{
  if (err) { throw err; }

  console.log('Connected!');
});
