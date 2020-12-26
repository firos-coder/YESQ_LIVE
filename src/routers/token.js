const sql = require('mssql')
const app = require('../../app')
const {instituteRegister, instituteListing} = require('../token/institute_profile')

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

    app.post('/institute/listing', async (req, res) => {
        await instituteListing(connection, (error, result) =>
        {
            if (error)
            {
                res.status(400).json("Can't load institutes")
            }
            res.status(200).json(result.recordset)
        })
    })
}
