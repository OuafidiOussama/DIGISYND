const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema

const apartmentSchema = new mongoose.Schema({
    apartmentNumber:{
        type: Number,
        trim: true,
        required: [true, 'Please Privide Your Apartment Number'],
    },
    syndic:{
        type: ObjectId,
        ref: 'users'
    },
    apartmentOwner:{
        type: Object,
        ownerName: {type: String, trim:true},
        cin: {type: String, trim:true},
        picture: {type: String},
        loaned: {type: Date, default: Date.now},
    },

}, {timestamps: true})




module.exports = mongoose.model("apartments", apartmentSchema)