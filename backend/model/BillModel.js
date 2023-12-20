const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema

const billSchema = new mongoose.Schema({
    apartment:{
        type: ObjectId,
        ref: "apartments"
    },
    syndic:{
        type: ObjectId,
        ref: "users"
    },
    paidAt:[{
        type: Date
    }]
},{timestamps: true})


module.exports = mongoose.model("bills", billSchema)