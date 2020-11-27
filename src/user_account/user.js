const sql = require('mssql')
const bcrypt = require('bcrypt')

const doSignup = async (connection, userData) =>
{
    return new Promise(async (resolve, reject) =>
    {
        let response = {}
        const mode = 'INSERT'
        const request = new sql.Request(connection)
        const groupId = "1"
        const policyid = "1"
        const accessid = "1"
        const mobile = userData.mobile
        const userId = mobile
        const password = userData.confirm_password
        const passwordHash = await bcrypt.hash(password, 8)
        const firstName = "NA"
        const middleName = "NA"
        const lastName = "NA"
        const fullName = userData.name
        const verfied = "NO"
        const userImage = "NA"
        const signupData = "NA"
        const email = "NA"
        const remarks = "NA"
        const status = "ACTIVE"
        request.input('MODE', sql.NVarChar(50), mode)
        request.input('GROUPID', sql.NVarChar(50), groupId)
        request.input('POLICYID', sql.NVarChar(50), policyid)
        request.input('ACCESSID', sql.NVarChar(50), accessid)
        request.input('USERID', sql.NVarChar(50), userId)
        request.input('PASWD', sql.NVarChar(sql.MAX), passwordHash)
        request.input('FULLNAME', sql.NVarChar(sql.MAX), fullName)
        request.input('FIRSTNAME', sql.NVarChar(50), firstName)
        request.input('MIDDLENAME', sql.NVarChar(50), middleName)
        request.input('LASTNAME', sql.NVarChar(50), lastName)
        request.input('MOBILE', sql.NVarChar(50), mobile)
        request.input('VERIFIED', sql.NVarChar(50), verfied)
        request.input('EMAILID', sql.NVarChar(50), email)
        request.input('USERIMAGE', sql.NVarChar(50), userImage)
        request.input('SIGNUPDATA', sql.NVarChar(50), signupData)
        request.input('CREATED', sql.DateTime2, new Date())
        request.input('MODIFIED', sql.DateTime2, new Date())
        request.input('DELETED', sql.DateTime2, new Date())
        request.input('REMARKS', sql.NVarChar(sql.MAX), remarks)
        request.input('STATUS', sql.NVarChar(50), status)

        await request.execute('USERACCOUNT_STP', (error, result, returnValue) =>
        {
            if (error != undefined)
            {
                reject(response =
                {
                    status: false,
                    errMsg: "Unable to create your account",
                    error:error
                })
            }
            else
                resolve(response =
                {
                    status: true,
                    mobile: mobile
                })
        })
    })


}

const doSignin = async (connection, userData) =>
{
    let response = {}
    return new Promise(async (resolve, reject) =>
    {
        const request = new sql.Request(connection)
        const mobile = userData.mobile

        request.input('mobile', sql.NVarChar(50), mobile)
        await request.query('SELECT UID,PASWD FROM USERACCOUNT WHERE USERID = @mobile', (error, result, returnValue) =>
        {
            if (error || result.rowsAffected[0] !== 1)
            {
                reject(response =
                {
                    status: false,
                    errMsg: "Unable to sign in!",
                })
            }
            else
            {
                let user =
                {
                    password: result.recordset[0].PASWD
                }
                bcrypt.compare(userData.password, user.password).then((status) =>
                {
                    if (status)
                    {
                        user =
                        {
                            UID: result.recordset[0].UID
                        }
                        resolve(user)
                    }
                    else
                    {
                        reject(
                            response =
                            {
                                status: false,
                                errMsg: "Unable to sign in"
                            }
                        )
                    }
                })
            }

        })
    })
}

const findUser = async (connection, userData, callback) =>
{
    const mobile = userData.mobile
    const request = new sql.Request(connection)

    request.input('mobile', sql.NVarChar(50), mobile)
    await request.query('SELECT UID,USERID FROM USERACCOUNT WHERE USERID = @mobile', (error, result, returnValue) =>
    {
        if (error || result.rowsAffected[0] !== 1)
        {
            callback("Can't create verification key",undefined)
        } else
            callback(undefined, result = {
                uid : result.recordset[0].UID,
                userId : result.recordset[0].USERID
        })
    })
}

const sendOTP = async (connection, userId, uid, callback) =>
{
    const request = new sql.Request(connection)
        let response = {}
        const secretid = '1'
        const randNumber = Math.floor((Math.random() * 899999) + 100000);
        const message = randNumber + '  is your verification code'
        const receiverType = 'USER'
        const appName = '1'
        const module = '1'
        const otpStatus = 'ACTIVATED'
        const remarks = "NA"
        const status = "ACTIVE"
        const otpDuration = 6.0
        const indiaTime = new Date()
        
        request.input('secretid', sql.NVarChar(50), secretid)
        request.input('uid', sql.NVarChar(50), uid)
        request.input('receiverType', sql.NVarChar(50), receiverType)
        request.input('appName', sql.NVarChar(50), appName)
        request.input('module', sql.NVarChar(50), module)
        request.input('sendto', sql.NVarChar(50), userId)
        request.input('otpCode', sql.NVarChar(50), randNumber)
        request.input('otpDate', sql.Date, indiaTime)
        request.input('otpTime', sql.Time, indiaTime)
        request.input('otpDuration', sql.Decimal(10,2), otpDuration)
        request.input('otpStatus', sql.NVarChar(50), otpStatus)
        
        request.input('created', sql.DateTime2, new Date())
        request.input('modified', sql.DateTime2, new Date())
        request.input('deleted', sql.DateTime2, new Date())
        request.input('userid', sql.NVarChar(sql.MAX), userId)
        request.input('remarks', sql.NVarChar(sql.MAX), remarks)
        request.input('status', sql.NVarChar(50), status)

    await request.query('INSERT INTO OTPSECRETS (SECRETID,RECEIVERID,RECEIVERTYPE,APPNAME,MODULE,SENDTO,OTPCODE,OTPDATE,OTPTIME,OTPDURATION,OTPSTATUS,CREATED,MODIFIED,DELETED,USERID,REMARKS,STATUS)VALUES(@secretid,@uid,@receiverType,@appName,@module,@sendto,@otpCode,@otpDate,@otpTime,@otpDuration,@otpStatus,@created,@modified,@deleted,@userid,@remarks,@status)', (error, result, returnvalue) =>
    {
        if (error || result.rowsAffected[0] !== 1)
        {
            callback("Can't create verification key"+error,undefined)
        }
        else
            callback(undefined, response =
            {
                mobile:userId,
                message:message
            })
            
    })


}
module.exports =
{
    doSignup,
    doSignin,
    findUser,
    sendOTP
} 