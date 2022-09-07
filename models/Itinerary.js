const mongoose = require('mongoose')


const itinerariesSchema = new mongoose.Schema({

        name:{type: String, required: true},
        user:{type: String, required: false},
        city:{type: String, required: false},
        price:{type: Number, required: true},
        likes:{type: Array, required: true},
        tags:{type: Array, required: true},
        duration:{type: Number, required: true}

})

const ItineraryModel = mongoose.model(
    'itineraries',
    itinerariesSchema
)


module.exports = ItineraryModel