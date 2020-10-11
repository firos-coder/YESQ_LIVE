const sql = require('mssql')

const pool = sql.ConnectionPool({
    host: "localhost",
    user: "",
    password: "",
    database: ""
})

module.exports = pool.promise()