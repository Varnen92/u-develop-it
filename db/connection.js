const mysql = require('mysql2')

// Connect to the database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Ossoona14@',
        database: 'election'
    },
    console.log('Connected to the election database.')
)

module.exports = db;