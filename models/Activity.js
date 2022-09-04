const mongoose = require('mongoose')


const activitiesSchema = new mongoose.Schema({

        name:{type: String, required: true},
        photo:{type: String, required: true},
        itinerary:{type: String, required: false}

})

const ActivityModel = mongoose.model(
    'Activities',
    activitiesSchema
)


module.exports = ActivityModel