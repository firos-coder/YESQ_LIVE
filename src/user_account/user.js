const sql = require('mssql')
const bcrypt = require('bcrypt')
const { request, response } = require('express')
const {getIdmaster,updateIdmaster} = require('../id_master/idMaster')

const doSignup = async (connection, uid, userData) => {
    return new Promise(async (resolve, reject) => {
        let response = {}
        const request = new sql.Request(connection)
        const groupId = "1"
        const policyid = "1"
        const accessid = "1"
        const mobile = userData.mobile
        const userId = mobile
        const password = userData.confirmPassword
        const passwordHash = await bcrypt.hash(password, 8)
        const firstName = "NA"
        const middleName = "NA"
        const lastName = "NA"
        const fullName = userData.name
        const verfied = "NO"
        const otpCode = "NA"
        const otpDuration ="NA"
        const userImage = "NA"
        const signupData = "NA"
        const email = "NA"
        const remarks = "NA"
        const status = "ACTIVE"
        request.input('uid', sql.NVarChar(50), uid)
        request.input('group_id', sql.NVarChar(50), groupId)
        request.input('policy_id', sql.NVarChar(50), policyid)
        request.input('access_id', sql.NVarChar(50), accessid)
        request.input('user_id', sql.NVarChar(50), userId)
        request.input('password', sql.NVarChar(sql.MAX), passwordHash)
        request.input('full_name', sql.NVarChar(sql.MAX), fullName)
        request.input('first_name', sql.NVarChar(50), firstName)
        request.input('middle_name', sql.NVarChar(50), middleName)
        request.input('last_name', sql.NVarChar(50), lastName)
        request.input('mobile', sql.NVarChar(50), mobile)
        request.input('verified', sql.NVarChar(50), verfied)
        request.input('user_image', sql.NVarChar(50), userImage)
        request.input('signup_data', sql.NVarChar(50), signupData)
        request.input('email', sql.NVarChar(50), email)
        request.input('created', sql.DateTime2, new Date())
        request.input('modified', sql.DateTime2, new Date())
        request.input('deleted', sql.DateTime2, new Date())
        request.input('remarks', sql.NVarChar(sql.MAX), remarks)
        request.input('status', sql.NVarChar(50), status)

        request.query('INSERT INTO USERACCOUNT (UID,GROUPID,POLICYID,ACCESSID,USERID,PASWD,FULLNAME,FIRSTNAME,MIDDLENAME,LASTNAME,MOBILE,VERIFIED,EMAILID,USERIMAGE,SIGNUPDATA,CREATED,MODIFIED,DELETED,REMARKS,STATUS)VALUES(@uid,@group_id,@policy_id,@access_id,@user_id,@password,@full_name,@first_name,@middle_name,@last_name,@mobile,@verified,@email,@user_image,@signup_data,@created,@modified,@deleted,@remarks,@status)', (error, result, returnValue) => {
            if (error != undefined) {
                reject(response = {
                    status: false,
                    errMsg: "Unable to create your account"
                })
            } else
                resolve(response = {
                    status: true,
                    mobile: mobile
                })
        })
    })


}
const doSignin = async (connection, userData) => {
    let response = {}
    return new Promise(async (resolve, reject) => {
        const request = new sql.Request(connection)
        const mobile = userData.mobile
        if (userData.mobile === '' || userData.password === '') {
            reject(response = {
                status: false,
                errMsg: "Fill all the fields"
            })
        }
        request.input('mobile', sql.NVarChar(50), mobile)
        await request.query('SELECT UID,PASWD FROM USERACCOUNT WHERE USERID = @mobile', (error, result, returnValue) => {
            if (error || result.rowsAffected[0] !== 1) {
                reject(response = {
                    status: false,
                    errMsg: "We cannot find an account with that mobile number"
                })
            } else {
                let user = {
                    password: result.recordset[0].PASWD
                }
                bcrypt.compare(userData.password, user.password).then((status) => {
                    if (status) {
                        user = {
                            UID: result.recordset[0].UID
                        }
                        resolve(user)
                    } else {
                        reject(
                            response = {
                                status: false,
                                errMsg: "Your password is incorrect"
                            }
                        )
                    }
                })
            }

        })
    })
}

const findUser = async (connection,userData,callback) => {
    const mobile = userData.mobile
    const request = new sql.Request(connection)

    request.input('mobile', sql.NVarChar(50), mobile)
    await request.query('SELECT UID,MOBILE FROM USERACCOUNT WHERE USERID = @mobile', (error, result, returnValue) => {
        if (error || result.rowsAffected[0] !== 1) {
            callback("We're sorry. We weren't able to identify you given the information provided.",undefined)
        } else
            callback(undefined, result = {
                uid : result.recordset[0].UID,
                mobile : result.recordset[0].MOBILE
        })
    })
}
const sendOTP = async (connection, mobile, uid,callback) => {
    const request = new sql.Request(connection)
    const relation = 'OTPSECRETS'

    await getIdmaster(relation, connection).then((result) => {
        return result
    }).then(async(secretid) => {

        const randNumber = Math.floor((Math.random() * 899999) + 100000);
        const receiverType = 'USER'
        const appName = '1'
        const module = '1'
        const otpStatus = 'ACTIVATED'
        const remarks = "NA"
        const status = "ACTIVE"
        const otpDuration = 6.0
        const userId = "NA"
        const indiaTime = new Date()
        
        request.input('secretid', sql.NVarChar(50), secretid)
        request.input('uid', sql.NVarChar(50), uid)
        request.input('receiverType', sql.NVarChar(50), receiverType)
        request.input('appName', sql.NVarChar(50), appName)
        request.input('module', sql.NVarChar(50), module)
        request.input('mobile', sql.NVarChar(50), mobile)
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

        await request.query('INSERT INTO OTPSECRETS (SECRETID,RECEIVERID,RECEIVERTYPE,APPNAME,MODULE,SENDTO,OTPCODE,OTPDATE,OTPTIME,OTPDURATION,OTPSTATUS,CREATED,MODIFIED,DELETED,USERID,REMARKS,STATUS)VALUES(@secretid,@uid,@receiverType,@appName,@module,@mobile,@otpCode,@otpDate,@otpTime,@otpDuration,@otpStatus,@created,@modified,@deleted,@userid,@remarks,@status)', (error, result, returnvalue) => {
        if (error || result.rowsAffected[0] !== 1) {
            callback("Can't create verification key"+error,undefined)
        } else
        callback(undefined,result)
        })
        
    })


}
module.exports = {
    doSignup,
    doSignin,
    findUser,
    sendOTP
}