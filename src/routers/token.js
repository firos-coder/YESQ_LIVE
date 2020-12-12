const sql = require('mssql')
const {instituteRegister} = require('../token/institute_profile')

module.exports = function (app, connection)
{
    app.post('/institute/registration', async(req, res) =>
    {
        await instituteRegister 

        
    })
}
