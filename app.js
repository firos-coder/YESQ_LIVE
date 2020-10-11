const express = require('express')


const app = express()

app.use(express.json())

app.get('/', async (req, res) => {
    res.send('<h1>Welcome to new project</h1>')
})

module.exports = app