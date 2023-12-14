const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema

const apartmentSchema = new mongoose.Schema({
    apartmentNumber:{
        type: Number,
        trim: true,
        required: [true, 'Please Privide Your Apartment Number'],
    },
    apartmentFloor: {
        type: Number,
        trim: true,
        required: [true, 'please Provide the apartment floor']
    },
    syndic:{
        type: ObjectId,
        ref: 'users'
    },
    apartmentOwner:{
        type: Object,
        required:[true, 'please Provide an owner'],
        ownerName: {type: String, trim:true},
        cin: {type: String, trim:true},
        picture: {type: String},
    },
    
}, {timestamps: true})




module.exports = mongoose.model("apartments", apartmentSchema)