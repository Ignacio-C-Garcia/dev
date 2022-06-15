const mysql = require('mysql')
const db = mysql.createConnection({
host: "ls-8d09e0656d4b2680c0cf18853aba714b36e16c32.c77j3q3wrfcb.us-east-1.rds.amazonaws.com",
user: "dbmasteruser",
password: "libertad",
database:"dbmaster",
port: 3306
})

module.exports = db;