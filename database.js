import mysql from 'mysql';

const connection = mysql.createConnection({
  host: '127.0.0.1', 
  user: 'root', 
  password: '', 
  database: 'PROJECT'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database');
});

module.exports = connection;
