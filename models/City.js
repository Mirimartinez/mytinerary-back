const mongoose = require ('mongoose')


const schema = new mongoose.Schema({

        city:{type: String, required: true, minlength: 5, maxlength: 100},
        country:{type: String, required: true, minlength: 6, maxlength: 100},
        photo:{type: String, required: true, validate: function (value) {
                if (! value.startsWith('http')) {throw new Error('URL must be start with http')}}},
        latitude:{type: Number, required: true},
        longitude: {type: Number, required: true},
        population:{type: Number, required: true},
        foundation:{type: Date, required: true}
})

const CityModel = mongoose.model(
    'city',
    schema
)

module.exports = CityModel