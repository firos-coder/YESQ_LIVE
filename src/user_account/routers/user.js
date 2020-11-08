const { doSignup } = require('../actions/user-action')

module.exports = function (app, connection) {
    const { getIdmaster, updateIdmaster } = require('../../id_master/idMaster')

    app.get('/register', (req, res) => {
        res.render('register')
    })

    app.post('/register', async (req, res) => {
        const relation = "USERACCOUNT"
        await getIdmaster(relation, connection).then((result) => {
            return result
        }).then((uid) => {
            doSignup(connection, uid, req.body, (error, result) => {
                if (error) {
                    return res.status(400).redirect('register', {
                        error: "Unable to register!"
                    })
                }
                const mobileSliced = result.mobile.slice(-4)
                const mobile = '******' + mobileSliced;
                const CValue = uid
                const uidParse = parseInt(uid)
                const NValue = uidParse + 1
                updateIdmaster(relation, CValue, NValue, connection).then((result) => {
                    res.render('verification', {
                        mobile: mobile
                    })
                })
            })
        }).catch((err) => {
            console.log(err);
        })

    })

    app.get('/login', (req, res) => {
        res.render('login')
    })


}
