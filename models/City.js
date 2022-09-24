const mongoose = require ('mongoose')


const schema = new mongoose.Schema({

        city:{
            type: String, 
            required: true,
            minlength: 1,
            maxlength: 100
        },
        country:{
            type: String, 
            required: true,
            minlength: 1,
            maxlength: 50
        },
        photo:{
            type: String, 
            required: true,
            validate: function (value) {
                if (! value.startsWith('http')) {throw new Error('URL must be start with http')
                }
            }
        },
        population:{
            type: Number, 
            required: true
        },
        foundation:{
            type: Date, 
            required: true
        }
})

const CityModel = mongoose.model(
    'city',
    schema
)

module.exports = CityModel