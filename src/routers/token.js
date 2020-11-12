module.exports = function (app, connection) {
    app.get('/', (req, res) => {
        res.render('index')
    })
}