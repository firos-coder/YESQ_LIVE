const express = require('express')
const config = require('./src/db/dbconfig').config
const app = express()
const sql = require('mssql')
const router = express.Router()
const bodyParser = require('body-parser')
const path = require('path')

const publicDirectoryPath = path.join(__dirname, './public')
const viewsPath = path.join(__dirname, './templates/views/')

app.set('view engine', 'hbs')
app.set("views", viewsPath)
app.use(express.static(publicDirectoryPath))

app.use('./src/routers', router)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

const connection = new sql.ConnectionPool(config, () => {
    console.log('DB connection successfull!');
})

require('./src/routers/token')(app, connection)
require('./src/routers/user')(app, connection)

module.exports = app