const { doSignup, doSignin } = require('../user_account/user')
const { getIdmaster, updateIdmaster } = require('../id_master/idMaster')
const { response } = require('express')

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
            res.render('index')
        }).catch((error) => {
            res.render('sign_in', {
                errMsg: error.errMsg
            })
        })
    })


}
