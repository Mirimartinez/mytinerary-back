const Auth = require('../models/User')

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
    }
}

module.exports = authController