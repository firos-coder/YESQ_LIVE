const express = require('express')
const config = require('./src/db/dbconfig').config
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

require('./src/routers/user')(app, connection)
require('./src/routers/token')(app, connection)

module.exports = app