const User = require('../model/UserModel')
const ErrorHandler = require('../utils/errorHandler')


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
        password: req.body.password
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

module.exports = {register}