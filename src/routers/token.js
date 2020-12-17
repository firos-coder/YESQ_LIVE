const sql = require('mssql')
const app = require('../../app')
const {instituteRegister} = require('../token/institute_profile')

module.exports = function (app, connection)
{
    app.post('/institute/registration', async(req, res) =>
    {
        await instituteRegister(connection, req.body, (error, response) =>
        {
            if (error)
            {
                console.log(error);
            }
            console.log(response);
        })
    })
}
