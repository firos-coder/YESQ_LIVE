const { doSignup, doSignin, findUser, sendOTP} = require('../user_account/user')
const { getIdmaster, updateIdmaster } = require('../id_master/idMaster')
const { response } = require('express')
const postmanRequest = require('postman-request')
const request = require('postman-request')

module.exports = function (app, connection) {

    app.get('/register', (req, res) => {
        res.render('register')
    })

    app.post('/register', async (req, res) => {

        const relation = "USERACCOUNT"

        await getIdmaster(relation, connection).then((result) => {
            return result
        }).then((uid) => {

            doSignup(connection, uid, req.body).then((response) => {

                if (response.status === true) {

                    const mobileSliced = response.mobile.slice(-4)
                    const mobile = '******' + mobileSliced;
                    const CValue = uid
                    const uidParse = parseInt(uid)
                    const NValue = uidParse + 1

                    updateIdmaster(relation, CValue, NValue, connection).then((result) => {
                        res.render('verification', {
                            mobile: mobile
                        })
                    })

                }

            })
        }).catch((err) => {
            console.log(err);
        })

    })

    app.get('/signin', (req, res) => {
        res.render('sign_in')
    })

    app.post('/signin', (req, res) => {
        doSignin(connection, req.body).then((response) => {
            res.status(200).render('index')
        }).catch((error) => {
            res.status(401).render('sign_in', {
                errMsg: error.errMsg
            })
        })
    })

    app.get('/forgot_password', (req, res) => {
        res.render('forgot_password')
    })
    app.post('/send_otp_sample', async (req, res) => {
        const mobile1 = '9562060575'
        const message = 'hi hello!!!!'
        const api_url = `http://roundsms.com/api/sendhttp.php?authkey=MDdhMzgzZjQ4OTd&mobiles=${mobile1}&message=${message}&sender=ROOTME&type=1&route=2`
        postmanRequest({ api_url, json: true }, (error, result) => {
            if (error) {
                res.send(error)
            }
            res.send(result)
        })

    })
    app.post('/send_otp', async (req, res) => {
        await findUser(connection, req.body, async (error, result) => {
            if (error) {
                return res.status(400).send(error)
            }
            const mobile = result.mobile
            const uid = result.uid
            await sendOTP(connection, mobile, uid, (err,result) => {
                if (err) {
                    return res.status(400).send(err)
                }
                res.status(200).send(result)
            })
        })
    })

    app.get('*', (req, res) => {
        res.render('404')
    })


}
