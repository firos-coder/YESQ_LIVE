const { response } = require('express')
const { doSignup, doSignin, findUser, sendOTP,doVerifyOTP,doChangePassword, findUserExist} = require('../user_account/user')

module.exports = function (app, connection)
{

    app.post('/register', async (req, res) =>
    {
        await findUserExist(connection, req.body).then(async (response) =>
        {
            await doSignup(connection, req.body, (error, result) =>
            {
                if (error)
                {
                    return res.status(400).json(error)
                }
                res.status(201).json(result)
            })
        }).catch((err) =>
            {
                res.status(400).json(err)
            })
        
    })

    app.post('/signin', (req, res) =>
    {
        doSignin(connection, req.body).then((response) =>
        {
            res.status(200).json('Sign in Completed!')
        }).catch((error) =>
        {
            res.status(401).json(error.errMsg)
        })
    })

    app.post('/send_otp', async (req, res) =>
    {

        await findUser(connection, req.body, async (error, result) =>
        {
            if (error)
            {
                return res.status(400).json(error)
            }
            const userId = result.userId
            const uid = result.uid

            await sendOTP(connection, userId, uid, async (error, response) =>
            {
                if (error)
                {
                    return res.status(400).json(error)
                }
                const http = require('http');
                
                const uid = response.uid
                const mobile = response.mobile
                const message = response.message
                const errMsg = "YESQ verification faild"

                await http.get('http://sapteleservices.com/SMS_API/sendsms.php?username=rootme&password=pass@2020&mobile='+mobile+'&sendername=ROTMPK&message='+message+'&routetype=1', (resp) =>
                {
                    let data = ''

                    resp.on('data', (chunk) =>
                    {
                        data += chunk;
                    });
                    resp.on('end', () =>
                    {
                        res.json(
                            {
                                mobile,
                                uid
                            })
                    });
                    
                }).on("error", (err) =>
                {
                    res.json(errMsg);
                });
            })
        })
    })

    app.post('/verification', async (req, res) =>
    {
        await doVerifyOTP(connection, req.body).then((result) =>
        {
            // res.status(200).json(result)
            res.status(200).json({
                uid: result.uid
            })
        }).catch((err) =>
        {  
            res.status(401).json(err)    
        })
    })
    
    app.post('/changepassword', async (req, res) =>
    {
        await doChangePassword(connection, req.body, (error, result) => {
            if (error) {
                 res.status(400).json(error)
            }
            res.status(200).json(result)
         })
    })

}
