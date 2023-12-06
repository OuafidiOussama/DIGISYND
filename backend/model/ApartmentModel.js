const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema

const apartmentSchema = new mongoose.Schema({
    apartmentNumber:{
        type: String,
        trim: true,
        required: [true, 'Please Privide Your Apartment Number'],
    },
    syndic:{
        type: ObjectId,
        ref: 'users'
    },
    apartmentOwner:{
        type: Object,
        ownerName: {type: String, required:[true, 'Please Provide apartment Owner full name']},
        cin: {type: String, required:[true, 'Please Provide apartment Owner CIN']},
        default: null
    },

}, {timestamps: true})




module.exports = mongoose.model("apartments", apartmentSchema)