
const mysql = require('mysql2/promise');
const config = {
  host: 'localhost',
  user: 'root',
  password: 'root123456',
  database: 'GO_ONE',
}
let connection = null;
async function connect() {
  connection = await mysql.createConnection(config);
}
async function select() {
  const SELECT_SQL = `SELECT * FROM test`;
  const [rows] = await connection.query(SELECT_SQL);
  return rows
}
async function insert(name) {
  const SELECT_SQL = `SELECT * FROM test`;
  const INSERT_SQL = `INSERT INTO test(name) VALUES(?)`;
  await connection.query(INSERT_SQL, name);
  const [rows] = await connection.query(SELECT_SQL);
  connection.end();
  return rows
}
  
module.exports = {
  connect,
  select,
  insert
 }
