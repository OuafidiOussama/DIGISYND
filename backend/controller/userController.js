const User = require('../model/UserModel')
const ErrorHandler = require('../utils/errorHandler')
const bcrypt = require('bcrypt')

register = async(req, res, next)=>{
    const {email} = req.body
    const userExists = await User.findOne({email})

    if(userExists){
        return next(new ErrorHandler('Email Already Registered', 400))
    }
    const data = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
    }
    try {
        const user = await User.create(data)
        res.status(201).json({
            success: true,
            user
        })
    } catch (error) {
        next(error)
    }
}

login = async (req, res, next)=>{
    try {
        const {email, password} = req.body
        if(!email){
            return next(new ErrorHandler('Please Provide Your Email Address', 403))
        }
        if(!password){
            return next(new ErrorHandler('Please Provide A Password', 403 ))
        }
        const user = await User.findOne({email})
        if(!user){
            return next(new ErrorHandler('Invalid Email Or Password', 400))
        }
        const isValid = await user.comparePassword(password)
        if(!isValid){
            return next(new ErrorHandler('Invalid Email Or Password', 400))
        }

       sendToken(user, 200, res)
    } catch (error) {
        next(error)
    }
}

changePassword = async(req, res, next)=>{
    try {
        const user = await User.findById(req.user.id)
        const data = {
            oldPassword: req.body.oldPassword,
            newPassword: req.body.newPassword,
            confirmPassword: req.body.confirmPassword,
        }
        if(! await bcrypt.compare(data.oldPassword, user.password)){
            next(new ErrorHandler('Old Password Is Incorrect !', 403))
        }
        if(data.newPassword !== data.confirmPassword){
            next(new ErrorHandler('Check Your New Password', 403))
        }
        
    } catch (error) {
        next(error)
    }
}

const sendToken = async (user, statusCode, res)=>{
    const token = await user.signJwtToken();
    res.status(statusCode).json({
        success: true,
        user: user,
        jwtToken: token
    })
}

userProfile = async (req, res, next)=>{
    const user = await User.findById(req.user.id).select('-password')
    res.status(200).json({
        success: true,
        user
    })
}

logout = (req,res, next)=>{
    res.status(200).json({
        success: true,
        message: "logout Successfully"
    })
}
module.exports = {register, login, userProfile, changePassword, logout}