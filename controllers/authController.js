const Auth = require('../models/User')
const crypto = require('crypto')
const bcryptjs = require('bcryptjs')
const sendMail = require('./sendMail')

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
                    sendMail(mail, code)
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
                res.status(404).json({
                    message: "couldn't verify email",
                    success: false
                })
            }
        } catch(error) {
            console.log(error);
            res.status(400).json()
        }
    },
        
    signIn: async (req, res) => {
        const {email, password, from} = req.body
        try {
            const user = await User.findOne({email})
            if (!user) {
                res.status(404).json ({
                    success: false,
                    message: "User doesn't exist, signup please"
                })
            } else if(user.verified) {
                const checkPass = user.password.filter(passwordElement => bcryptjs.compareSync(password, passwordElement))

                if(from === 'form'){ 

                    if(checkPass.length > 0){ 

                        const loginUser = {
                            id: user._id,
                            name: user.name,
                            lastName: user.lastName,
                            country: user.country,
                            email: user.email,
                            role: user.role,
                            from: user.from,
                            photo: user.photo
                        }

                        user.logged = true
                        await user.save()
                        res.status(200).json({
                            success: true,
                            response: {user: loginUser},
                            message: 'Welcome ' + user.name
                        })
                    }else{ 
                        res.status(400).json({
                            success: false,
                            message: 'Username or password incorrect'
                        })
                    }

                } else { //si el usuario intenta ingresar por redes sociales
                    if(checkPass.length > 0){ //si contraseña coincide 

                        const loginUser = {
                            id: user._id,
                            name: user.name,
                            lastName: user.lastName,
                            country: user.country,
                            email: user.email,
                            role: user.role,
                            from: user.from,
                            photo: user.photo
                        }
                        user.logged = true
                        await user.save()
                        res.status(200).json({
                            success: true,
                            response: {user: loginUser},
                            message: 'Welcome' + user.name
                        })
                    }else{ // si contraseña no coincide
                        res.status(400).json({
                            success: false,
                            message: 'Invalid credentials'
                        })
                    }
                }
            } else {// Si usuario existe pero no esta verificado
                res.status(401).json({
                    success: false,
                    message: 'Verify your email and try again, please'
                })
            }
        } catch (error) {
            console.log(error);
            res.status(400).json({
                success: false,
                message: 'Houston, we have a problem. Please try again later'
            })
        }
    },


}

module.exports = authController