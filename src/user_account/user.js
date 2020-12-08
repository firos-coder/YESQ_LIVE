const sql = require('mssql')
const bcrypt = require('bcrypt')
const { response } = require('express')

const findUserExist = async (connection, userData) => {
    return new Promise(async (resolve, reject) => {
        const mode = 'FIND_USER'
        const mobile = userData.mobile
        const request = new sql.Request(connection)
        let response = {}

        request.input('MODE', sql.NVarChar(50), mode)
        request.input('MOBILE', sql.NVarChar(50), mobile)
        await request.execute('USERACCOUNT_STP', (error, result, returnValue) => {
            if (error) {
                reject("Execution error!")
            }
            else if (result.rowsAffected[0] > 0) {
                reject(response =
                {
                    status: false,
                    errMsg: "This mobile number already in use!"
                }
                )
            }

            resolve(response = {
                status: true,
                mobile: mobile
            })
        })
    })

}

const doSignup = async (connection, userData, callback) => {
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

    await request.execute('USERACCOUNT_STP', (error, result, returnValue) => {
        if (error != undefined) {
            callback(response =
            {
                status: false,
                errMsg: "Unable to create your account",
                error: error
            }, undefined)
        }
        else
            callback(undefined, response =
            {
                status: true,
                mobile: mobile
            })
    })


}

const doSignin = async (connection, userData) => {
    let response = {}
    return new Promise(async (resolve, reject) => {
        const request = new sql.Request(connection)
        const mobile = userData.mobile

        request.input('mobile', sql.NVarChar(50), mobile)
        await request.query('SELECT UID,PASWD FROM USERACCOUNT WHERE USERID = @mobile', (error, result, returnValue) => {
            if (error || result.rowsAffected[0] !== 1) {
                reject(response =
                {
                    status: false,
                    errMsg: "Unable to sign in",
                })
            }
            else {
                let user =
                {
                    password: result.recordset[0].PASWD
                }
                bcrypt.compare(userData.password, user.password).then((status) => {
                    if (status) {
                        user =
                        {
                            UID: result.recordset[0].UID
                        }
                        resolve(user)
                    }
                    else {
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

const findUser = async (connection, userData, callback) => {
    const mobile = userData.mobile
    const request = new sql.Request(connection)

    request.input('mobile', sql.NVarChar(50), mobile)
    await request.query('SELECT UID,USERID FROM USERACCOUNT WHERE USERID = @mobile', (error, result, returnValue) => {
        if (error || result.rowsAffected[0] !== 1) {
            callback("Can't create verification key", undefined)
        } else
            callback(undefined, result = {
                uid: result.recordset[0].UID,
                userId: result.recordset[0].USERID
            })
    })
}

const sendOTP = async (connection, userId, uid, callback) => {
    const request = new sql.Request(connection)
    let response = {}
    const mode = 'INSERT'
    const randNumber = Math.floor((Math.random() * 899999) + 100000);
    const message = randNumber + '  is your YESQ security code. Enter the code on YESQ to verify your account.'
    const receiverType = 'USER'
    const appName = '1'
    const module = '1'
    const otpStatus = 'ACTIVATED'
    const remarks = "NA"
    const status = "ACTIVE"
    const otpDuration = 6.0
    const indiaTime = new Date()

    request.input('MODE', sql.NVarChar(50), mode)
    request.input('RECEIVERID', sql.NVarChar(50), uid)
    request.input('RECEIVERTYPE', sql.NVarChar(50), receiverType)
    request.input('APPNAME', sql.NVarChar(50), appName)
    request.input('MODULE', sql.NVarChar(50), module)
    request.input('SENDTO', sql.NVarChar(50), userId)
    request.input('OTPCODE', sql.NVarChar(50), randNumber)
    request.input('OTPDATE', sql.Date, indiaTime)
    request.input('OTPTIME', sql.Time, indiaTime)
    request.input('OTPDURATION', sql.Decimal(10, 2), otpDuration)
    request.input('OTPSTATUS', sql.NVarChar(50), otpStatus)
    request.input('CREATED', sql.DateTime2, new Date())
    request.input('MODIFIED', sql.DateTime2, new Date())
    request.input('DELETED', sql.DateTime2, new Date())
    request.input('USERID', sql.NVarChar(sql.MAX), userId)
    request.input('REMARKS', sql.NVarChar(sql.MAX), remarks)
    request.input('STATUS', sql.NVarChar(50), status)

    await request.execute('OTPSECRETS_STP', (error, result, returnvalue) => {
        if (error || result.rowsAffected[0] !== 1) {
            callback("Can't create verification key", undefined)
        }
        else
            callback(undefined, response =
            {
                uid: uid,
                mobile: userId,
                message: message
            })

    })


}

const doVerifyOTP = async (connection, userData) => {
    const request = new sql.Request(connection)
    return new Promise(async (resolve, reject) => {
        const uid = userData.uid
        const code = userData.code
        const mode = 'VERIFY'
        const sendTo = userData.sendTo

        request.input('MODE', sql.NVarChar(50), mode)
        request.input('RECEIVERID', sql.NVarChar(50), uid)
        request.input('OTPCODE', sql.NVarChar(50), code)
        request.input('SENDTO', sql.NVarChar(50), sendTo)

        await request.execute('OTPSECRETS_STP', (error, result, returnValue) => {
            if (error || result.rowsAffected[0] !== 1) {
                reject("Invalid OTP. Please check your code and try again.")
            }

            resolve(
                {
                    status: true,
                    uid,
                })
        })

    })
}

const doChangePassword = async (connection, userData, callback) => {

    const request = new sql.Request(connection)

    const mode = 'CHANGE_PASSWORD'
    const uid = userData.uid
    const userpassword = userData.confirm_password
    const password = await bcrypt.hash(userpassword, 8)

    request.input('MODE', sql.NVarChar(50), mode)
    request.input('UID', sql.NVarChar(50), uid)
    request.input('PASWD', sql.NVarChar(sql.MAX), password)

    await request.execute('USERACCOUNT_STP', (error, result, returnValue) => {
        if (error || result.rowsAffected[0] !== 1) {
            callback("Can't Change your password", undefined)
        }
        callback(undefined, result)
    })

}

module.exports =
{
    doSignup,
    doSignin,
    findUser,
    sendOTP,
    doVerifyOTP,
    doChangePassword,
    findUserExist
} 