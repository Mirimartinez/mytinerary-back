const mongoose = require('mongoose')


const usersSchema = new mongoose.Schema({

        name:{
            type: String, 
            required: true,
            min: 5,
            max:75
        },

        lastName:{
            type: String, 
            required: true,
            min: 5,
            max:75
        },

        mail:{
            type: String, 
            required: true
        },

        password:[{
            type: String, 
            required: true,
            minlength: 6,
        }]
        ,
        photo:{
            type: String, 
            required: true,
            validate: function (value) {
                if (! value.startsWith('http')) {
                    throw new Error('URL must start with http')
                }
            }
        },

        country:{
            type: String, 
            required: true,
            min: 5,
            max:25
        },

        from: [{
            type: String, 
            required: true
        }],

        logged: {
            type: String, 
            required: false
        },

        verified: {
            type: String, 
            required: false
        },

        code: {
            type: String, 
            required: false
        }

    })

const UserModel = mongoose.model(
    'users',
    usersSchema
)

module.exports = UserModel