const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-learn',
    password: 'root'
})

module.exports = pool.promise();