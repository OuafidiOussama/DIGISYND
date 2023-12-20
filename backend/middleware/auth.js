const ErrorHandler = require('../utils/errorHandler')
const jwt = require('jsonwebtoken')
const User = require('../model/UserModel')
const Apartment = require('../model/ApartmentModel')
const Bill = require('../model/BillModel')

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

isSuper = (req, res, next)=>{
    if(req.user.role  !== 'super'){
        return next(new ErrorHandler('Access Denied, you must be a super Admin', 401))
    } else{
        next()
    }
}

isSyndic = (req, res, next)=>{
    if(req.user.role !== 'syndic'){
        return next(new ErrorHandler('Access denied, you must be a syndic', 401))
    }else {
        next()
    }
}

isCreatorApartment = async (req, res, next)=>{
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
isCreatorBill = async (req, res, next)=>{
    const userId = req.user._id.toString()
    const apartmentId = req.params.id
    const bill = await Bill.findOne({apartment: apartmentId})
    if(!bill){
        return next(new ErrorHandler('No Bill Found', 404))
    }
    const creatorId = bill.syndic.toString()

    if(userId !== creatorId){
        return next(new ErrorHandler('You cant Operate on this Bill'))
    }
    next()
}

module.exports = {
    authenticate,
    isSyndic,
    isCreatorApartment,
    isCreatorBill,
    isSuper
}