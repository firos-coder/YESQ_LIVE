module.exports = function (app, connection) {
    const { getIdmaster, updateIdmaster } = require('../id_master/idMaster')
    const sql = require('mssql')
    const bcrypt = require('bcrypt')
    app.post('/create/user', async (req, res) => {
        const request = new sql.Request(connection)
        const relation = req.body.relation
        const groupId = req.body.groupId
        const mobile = req.body.mobile
        const userId = mobile
        const password = req.body.password
        const passwordHash = await bcrypt.hash(password, 8)
        const firstName = req.body.firstName
        const middleName = req.body.middleName
        const lastName = req.body.lastName
        const fullName = firstName + " " + middleName + " " + lastName
        const verfied = req.body.verfied
        const email = req.body.email
        const remarks = req.body.remarks
        const status = req.body.status
        await getIdmaster(relation, connection).then((result) => {
            return result
        }).then((uid) => {
            request.input('uid', sql.NVarChar(50), uid)
            request.input('group_id', sql.NVarChar(50), groupId)
            request.input('user_id', sql.NVarChar(50), userId)
            request.input('password', sql.NVarChar(sql.MAX), passwordHash)
            request.input('full_name', sql.NVarChar(sql.MAX), fullName)
            request.input('first_name', sql.NVarChar(50), firstName)
            request.input('middle_name', sql.NVarChar(50), middleName)
            request.input('last_name', sql.NVarChar(50), lastName)
            request.input('mobile', sql.NVarChar(50), mobile)
            request.input('verified', sql.NVarChar(50), verfied)
            request.input('email', sql.NVarChar(50), email)
            request.input('created', sql.DateTime2, new Date())
            request.input('modified', sql.DateTime2, new Date())
            request.input('deleted', sql.DateTime2, new Date())
            request.input('remarks', sql.NVarChar(sql.MAX), remarks)
            request.input('status', sql.NVarChar(50), status)

            request.query('INSERT INTO USERACCOUNT (UID,GROUPID,USERID,PASWD,FULLNAME,FIRSTNAME,MIDDLENAME,LASTNAME,MOBILE,VERIFIED,EMAILID,CREATED,MODIFIED,DELETED,REMARKS,STATUS)VALUES(@uid,@group_id,@user_id,@password,@full_name,@first_name,@middle_name,@last_name,@mobile,@verified,@email,@created,@modified,@deleted,@remarks,@status)', (error, recordsets, returnValue) => {
                console.log(error);
                console.log(recordsets);
                if (error != undefined) {

                    res.status(500).json({ "result": false });
                }
                else

                    res.status(200).json({ "result": true });
                const CValue = uid
                const uidParse = parseInt(uid)
                const NValue = uidParse + 1
                updateIdmaster(relation, CValue, NValue, connection).then((result) => {
                    console.log(result);
                })
            })

        }).catch((err => {
            console.log(err);
        }))



    })

}
