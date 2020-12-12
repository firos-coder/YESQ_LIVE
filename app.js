const express = require('express')
const config = require('./src/db/dbconfig').config
const tokenDbConfig = require('./src/db/tokendbconfig').tokenDbConfig
const app = express()
const sql = require('mssql')
const router = express.Router()
const bodyParser = require('body-parser')

app.use('./src/routers', router)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

const connection = new sql.ConnectionPool(config, () =>
{
    console.log('DB connection successfull!');
})
const tokenConnection = new sql.ConnectionPool(tokenDbConfig, () =>
{
    console.log('TokenDB connection successfull!');
})

require('./src/routers/token')(app, tokenConnection)
require('./src/routers/user')(app, connection)

module.exports = app