const mongoose = require ('mongoose')


const schema = new mongoose.Schema({

        city:{type: String, required: true},
        country:{type: String, required: true},
        photo:{type: String, required: true},
        population:{type: Number, required: true},
        foundation:{type: Date, required: true}
})

const CityModel = mongoose.model(
    'city',
    schema
)

module.exports = CityModel