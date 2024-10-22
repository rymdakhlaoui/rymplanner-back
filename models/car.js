const mongoose = require('mongoose')

const Schema = mongoose.Schema

const carSchema = new Schema({
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    fuel: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
    
},
{
    timestamps: true
},
{
    collection: 'cars'
})


module.exports = Car = mongoose.model('Car', carSchema)