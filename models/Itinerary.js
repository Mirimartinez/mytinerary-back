const mongoose = require('mongoose')


const itinerariesSchema = new mongoose.Schema({
        name:{type: String, required: true, minlength: 6,maxlength: 100},
        user:{type: mongoose.Types.ObjectId, ref: 'users'},
        city:{type: mongoose.Types.ObjectId, ref: 'city', minlength: 1,maxlength: 100},
        price:{type: Number, min:1, max:5, required: true},
        likes:[{type: Array, required: true}],
        tags:[{type: String, required: true}],
        duration:{type: Number, required: true, min: 0, max: 20},
        comments:{type: mongoose.Types.ObjectId, ref: 'comments'}
})

const ItineraryModel = mongoose.model(
    'itineraries',
    itinerariesSchema
)


module.exports = ItineraryModel