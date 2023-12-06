const ErrorHandler = require('../utils/errorHandler')
const jwt = require('jsonwebtoken')
const User = require('../model/UserModel')

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

module.exports = {
    authenticate,
    isSyndic
}