const Auth = require('../models/User')
const crypto = require('crypto')
const bcryptjs = require('bcryptjs')
const sendMail = require('./sendMail')
const jwt = require('jsonwebtoken')
const joi = require('joi')

const validator =joi.object({
    name: joi.string().pattern(/^[ñA-Za-z _]*[ñA-Za-z][ñA-Za-z _]*$/).min(3).max(15).required(),
    lastname: joi.string().pattern(/^[ñA-Za-z _]*[ñA-Za-z][ñA-Za-z _]*$/).min(3).max(15).required(),
    photo: joi.string().uri().required(),
    country: joi.string().min(4).max(30).required(), 
    email: joi.alternatives().try(joi.string().lowercase().email({minDomainSegments: 2,tlds: {allow: ["com", "net", "uy", "ar", ],},}),).required().error(new Error("Invalid email")),
    password: joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/),
    role: joi.string().min(3).max(15).required(),
    from: joi.string().min(3).max(15).required()
})
const authController = {
    create: async(req, res) =>{
        try{
            let auth = await new Auth(req.body).save()
            res.status(201).json({
                message: "The user has been created! 🥳",
                response: auth._id,
                success: true
            })
        } catch(error){
            console.log(error);
            res.status(400).json({
                message:"Couldn't create user... 😧",
                success: false
            })
        }
    },

    all: async(req, res) =>{
        let users
        let query = {}
        if(req.query.users){
            query.users= req.query.users
        }
        try{
            users = await Auth.find()
            if(users){
                res.status(200).json({
                    message: "These are all users! 🤩",
                    response: users,
                    success: true
                })
            } else {
                res.status("404").json({
                    message: "No users could't be found",
                    success: false,
                })
            }
        } catch(error){
            console.log(error);
            res.status(400).json({
                message: "Error",
                success: false
            })
        }
    },

    getUser: async (req, res) => {
        const {id} = req.params
        try{
            let user = await Auth.findOne({_id:id})
            .populate('itineraries', {name:1, city:1})
            if(user){
                res.status(200).json({
                    message: "Found user",
                    response: user,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: "User could't be found",
                    success: false
                })
            }
        } catch(error){
            console.log(error)
            res.status(400).json({
                message: "Error",
                success: false
            })
        }
    },

    signUp: async(req, res) => {
        let {name, lastName, mail, photo, country, password, from, role} = req.body
        try{
            let result = await validator.validateAsync(req.body)
            let user = await Auth.findOne({mail})
            if(!user){
                let logged = false;
                let verified = false;
                let role = 'user'
                let code = crypto.randomBytes(15).toString('hex')
                if(from === 'form'){
                    password = bcryptjs.hashSync(password, 10)
                    user = await new Auth({name, lastName, mail, password:[password], photo, country,from:[from], role, logged, verified, code}).save();
                    sendMail(mail, code)
                    res.status(201).json({
                        message: "User Signed Up from form 🤩",
                        success: true
                    })
                } else{
                    password = bcryptjs.hashSync(password, 10);
                    verified: true;
                    user = await new Auth({name, lastName, mail, password:[password], role, photo, country,from:[from], logged, verified, code}).save();
                    res.status(201).json({
                        message: "User Signed Up from " + from + " 🤩",
                        success: true
                    })
                }
            } else {
                if(user.from.includes(from)){
                    res.status(200).json({
                        message: "User already exists 🧐",
                        success: false
                    })
                } else{
                    user.from.push(from)
                    user.password.push(bcryptjs.hashSync(password, 10))
                    user.verified = true;
                    await user.save()
                    res.status(200).json({
                        message: "User Signed Up from " + from + " 🤩",
                        success: true
                    })
                }
            }
        } catch(error){
            console.log(error)
            res.status(400).json({
                message: "Couldn't sign up 😖",
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
                    message: "Couldn't verify your email 😖",
                    success: false
                })
            }
        } catch(error) {
            console.log(error);
            res.status(400).json({
                message: "Something went wrong 😖",
                success: false
            })            
        }
    },
        
    signIn: async (req, res) => {
        const {mail, password, from} = req.body
        try {
            const user = await Auth.findOne({mail})
            if (!user) {
                res.status(404).json ({
                    success: false,
                    message: "User doesn't exist, signup please 😊"
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
                            role: user.role,
                            photo: user.photo
                        }
                        const token = jwt.sign({id: user._id}, process.env.KEY_JWT, {expiresIn: 60*60*24})
                        user.logged = true
                        await user.save()
                        res.status(200).json({
                            message: 'Welcome ' + user.name + ' 😊',
                            response: {user: loginUser, token: token},
                            success: true,
                        })
                    }else{ 
                        res.status(400).json({
                            success: false,
                            message: 'Username or password incorrect 😖'
                        })
                    }

                } else {
                    if(checkPass.length > 0){

                        const loginUser = {
                            id: user._id,
                            name: user.name,
                            lastName: user.lastName,
                            country: user.country,
                            mail: user.mail,
                            role: user.role,
                            from: user.from,
                            photo: user.photo
                        }
                        user.logged = true
                        await user.save()
                        res.status(200).json({
                            success: true,
                            response: {user: loginUser},
                            message: 'Welcome' + user.name + ' 😊'
                        })
                    }else{
                        res.status(400).json({
                            success: false,
                            message: 'Invalid credentials 🥴'
                        })
                    }
                }
            } else {
                res.status(401).json({
                    success: false,
                    message: 'Verify your email and try again, please 😊'
                })
            }
        } catch (error) {
            console.log(error);
            res.status(400).json({
                success: false,
                message: 'Houston, we have a problem🥴 Please try again'
            })
        }
    },

    signOut: async(req, res) => {
        const { email } = req.params

        try {
            let user = await Auth.findOne({ email: email })
            if (user) {
                user.logged = false
                await user.save()
                res.status(200).json({
                    success: true,
                    response: user.logged,
                    menssage: 'Logged out successfully 😌'
                })
            } else {
                res.status(404).json({
                    success: false,
                    message:"Couldn't find user 🧐"
                })
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                success: false,
                message: 'Houston, we have a problem🥴 Please try again '
            })
        }
    },

    verifyToken: (req, res) => {
        if(req.user !== null) {
            res.status(200).json({
                success: true,
                response: {
                    user: {
                        id: req.user.id,
                        name: req.user.name,
                        mail: req.user.mail,
                        role: req.user.role,
                        photo: req.user.photo
                    }
                },
                message: "Welcome " + req.user.name
            })
        } else {
            res.json({
                success: false,
                message: "Sign in please"
            })
        }
    },

    deleteUser: async (req, res) => {
        const {id} = req.params
        if(req.user !== null){
            try{
                await Auth.findOneAndDelete({_id:id})
                res.status(200).json({
                    message: "User deleted successfuly",
                    success: true
                })
            } catch(error){
                console.log(error);
                res.status(400).json({
                    message: "Error",
                    success: false
                })
            }
        } else {
            res.status(401).json({
                message: "Unauthorized",
                success: false
            })
        }
    },

    updateUser: async (req, res) => {
        const {mail} = req.body
        const {role} = req.user
        try{
            if(mail.toString() === mail || role === "admin"){
                let user = await Auth.findOne({mail:mail})
                if(user){
                    let {
                        name, lastName, photo, country, role
                    } = req.body
                    if (role !== "admin"){
                        user = await Auth.findOneAndUpdate({mail:mail}, {name, lastName, photo, country}, {new:true})
                        res.status(200).json({
                            message: "User updated successfuly",
                            response: user,
                            success: true
                        })
                    } else if( role == "admin"){
                        user = await Auth.findOneAndUpdate({mail:mail}, {name, lastName, photo, country}, {new:true})
                        res.statu(200).json({
                            message: "User updated successfuly",
                            response: user,
                            success: true
                        })
                    } else {
                        res.status(404).json({
                            message: "User doesn't exist",
                            success: false
                        })
                    }
                } 
            }
        } catch(error){
            console.log(error);
            res.status(400).json({
                message: "Error",
                success: false
            })
        }
    }
}

module.exports = authController