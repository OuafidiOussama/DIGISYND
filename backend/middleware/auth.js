const ErrorHandler = require('../utils/errorHandler')
const jwt = require('jsonwebtoken')
const User = require('../model/UserModel')
const Apartment = require('../model/ApartmentModel')

authenticate = async (req, res, next)=>{
    const authHeaders = req.headers['authorization']
    if(!authHeaders){
        return next(new ErrorHandler('You Must Log In', 401))
    }
    try{
        const token = authHeaders.split(' ')[1]
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        req.user = await User.findById(decoded.id)
        next()
    }catch(err){
        next(new ErrorHandler('Token Has Been Changed', 401))
    }
}

isSyndic = (req, res, next)=>{
    if(req.user.role !== 'syndic'){
        return next(new ErrorHandler('Access denied, you must be a syndic', 401))
    }else {
        next()
    }
}

isCreator = async (req, res, next)=>{
    const userId = req.user._id.toString()
    const apartmentId = req.params.id
    const apartment = await Apartment.findOne({_id:apartmentId})
    
    if(!apartment){
        return next(new ErrorHandler('No Apartment Found', 404))
    }
    const creatorId = apartment.syndic.toString()

    if(userId !== creatorId){
        return next(new ErrorHandler('You cant Operate on this apartment'))
    }
    next()
}

module.exports = {
    authenticate,
    isSyndic,
    isCreator
}