const sql = require('mssql')
const bcrypt = require('bcrypt')

const doSignup = async (connection, uid, userData) => {
    return new Promise(async (resolve, reject) => {
        let response = {}
        const request = new sql.Request(connection)
        const groupId = "NA"
        const mobile = userData.mobile
        const userId = mobile
        const password = userData.confirmPassword
        const passwordHash = await bcrypt.hash(password, 8)
        const firstName = "NA"
        const middleName = "NA"
        const lastName = "NA"
        const fullName = userData.name
        const verfied = "NO"
        const email = "NA"
        const remarks = "NA"
        const status = "ACTIVE"
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
            if (error != undefined) {
                reject(response.status = false)
            } else
                resolve(mobile)
        })
    })


}

module.exports = {
    doSignup
}