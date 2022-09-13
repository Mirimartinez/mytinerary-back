const mongoose = require('mongoose')


const itinerariesSchema = new mongoose.Schema({
        name:{type: String, required: true},
        user:{type: mongoose.Types.ObjectId, ref: 'users'},
        city:{type: mongoose.Types.ObjectId, ref: 'cities'},
        price:{type: Number, min:1, max:5, required: true},
        likes:{type: Array, required: true},
        tags:{type: Array, required: true},
        duration:{type: Number, required: true}
})

const ItineraryModel = mongoose.model(
    'itineraries',
    itinerariesSchema
)


module.exports = ItineraryModel