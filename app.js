const express = require('express')
const config = require('./src/db/dbconfig').config
const app = express()
const sql = require('mssql')
const router = express.Router()
const bodyParser = require('body-parser')

const connection = new sql.ConnectionPool(config, () => {
    console.log('DB connection successfull!');
})

app.use('./src/routers', router)
app.use(bodyParser.json())

require('./src/routers/user')(app, connection)

module.exports = app