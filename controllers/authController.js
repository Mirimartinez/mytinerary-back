const Auth = require('../models/User')
const crypto = require('crypto')
const bcryptjs = require('bcryptjs')

const authController = {
    create: async(req, res) =>{
        try{
            let auth = await new Auth(req.body).save()
            res.status(201).json({
                message: "user has been created succesfuly",
                response: auth._id,
                success: true
            })
        } catch(error){
            console.log(error);
            res.status(400).json({
                message:"couldn't create user",
                success: false
            })
        }
    },

    all: async(req, res) =>{
        try{
            let users = await Auth.find()
            res.status(200).json({
                message: "You get users",
                response: users,
                success: true
            })
        } catch(error){
            console.log(error);
            res.status(500).json()
        }
    },

    signUp: async(req, res) => {
        let {name, lastName, mail, photo, country, password, from} = req.body
        try{
            let user = await Auth.findOne({mail})
            if(!user){
                let logged = false;
                let verified = false;
                let code = crypto.randomBytes(15).toString('hex')
                if(from === 'form'){
                    password = bcryptjs.hashSync(password, 10)
                    user = await new Auth({name, lastName, mail, password:[password], photo, country,from:[from], logged, verified, code}).save();
                    res.status(201).json({
                        message: " User Signed Up from form",
                        success: true
                    })
                } else{
                    password = bcryptjs.hashSync(password, 10);
                    verified: true;
                    user = await new Auth({name, lastName, mail, password:[password], photo, country,from:[from], logged, verified, code}).save();
                    res.status(201).json({
                        message: " User Signed Up from " + from,
                        success: true
                    })
                }
            } else {
                if(user.from.includes(from)){
                    res.status(200).json({
                        message: "User already exists",
                        success: false
                    })
                } else{
                    user.from.push(from)
                    user.password.push(bcryptjs.hashSync(password, 10))
                    user.verified = true;
                    await user.save()
                    res.status(200).json({
                        message: "User Signed Up from " + from,
                        success: true
                    })
                }
            }
        } catch(error){
            console.log(error)
            res.status(400).json({
                message: "couldn't sign up",
                success: false
            })
        }
    },

    verifyMail: async(req, res) => {
        const {code} = req.params
        try{
            let user = await Auth.findOne({code})
            if (user) {
                user.verified = true
                await user.save()
                res.redirect(302, 'http://localhost:4000/')
            } else {
                res.status(400).json({
                    message: "couldn't verigy email",
                    success: false
                })
            }
        } catch(error) {
            console.log(error);
            res.status(400).json()
        }
    }
}

module.exports = authController