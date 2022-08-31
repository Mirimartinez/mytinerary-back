const mongoose = require('mongoose')


const schema = new mongoose.Schema({

        city:{type: String, required: true},
        coutry:{type: String, required: true},
        photo:{type: String, required: true},
        population:{type: Number, required: true},
        fundation:{type: Date, required: true}

})

const City = mongoose.model(
    'city',
    schema
)


module.exports = City