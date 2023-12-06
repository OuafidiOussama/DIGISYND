const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        trim: true,
        required: [true, 'Please Privide Your First Name'],
        maxlength: 32,
    },
    lastName:{
        type: String,
        trim: true,
        required: [true, 'Please Privide Your Last Name'],
        maxlength: 32,  
    },
    picture:{
        type: String,
        required: [true, 'Please Privide A Picture'], 
    },
    email:{ 
        type: String,
        trim: true,
        unique: true,
        required: [true, 'Please Privide Your Email']
    },
    password:{
        type: String,
        trim: true,
        required: [true, 'Please Privide Your Password'],
        minlength: [6, 'Password must be at least 6 characters'],
    },
    role:{
        type: String,
        default: 'syndic'
    }
}, {timestamps: true})



module.exports = mongoose.model("users", userSchema)