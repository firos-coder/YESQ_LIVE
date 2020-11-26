const { doSignup, doSignin, findUser, sendOTP } = require('../user_account/user')
const { response } = require('express')

module.exports = function (app, connection) {

    app.post('/register', async (req, res) => {

            doSignup(connection,req.body).then((response) => {

                if (response.status === true) {

                    const mobile = response.mobile
                    res.status(200).json(mobile)

                }

            }).catch((err) => {
            res.status(400).json(err)
        })
        })

    app.post('/signin', (req, res) => {
        doSignin(connection, req.body).then((response) => {
            res.status(200).json('Sign in Completed!')
        }).catch((error) => {
            res.status(401).json(error.errMsg)
        })
    })

    app.post('/send_otp', async (req, res) => {

        await findUser(connection, req.body, async (error, result) => {
            if (error) {
                return res.status(400).json(error)
            }
            const userId = result.userId
            const uid = result.uid

            await sendOTP(connection, userId, uid, async (err,response) => {
                if (err) {
                    return res.status(400).json(err)
                }
                const http = require('http');
                
                const mobile = response.mobile
                const message = response.message

                await http.get('http://roundsms.com/api/sendhttp.php?authkey=MDdhMzgzZjQ4OTd&mobiles='+mobile+'&message='+message+'&sender=ROOTME&type=1&route=2', (resp) => {
                    let data = ''

                    resp.on('data', (chunk) => {
                        data += chunk;
                    });
                    resp.on('end', () => {
                        res.render('verification')
                    });
                    
                }).on("error", (err) => {
                    res.send("Error: " + err.message);
                });
            })
        })
    })

    app.post('/verification', async (req, res) => {
        
    })


}
