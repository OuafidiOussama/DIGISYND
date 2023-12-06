const Apartment = require('../model/ApartmentModel')
const ErrorHandler = require('../utils/errorHandler')

createApartment = async (req, res, next) =>{
    try {
        const data = {
            apartmentNumber: req.body.apartmentNumber,
            syndic: req.user._id,
            apartmentOwner: req.body.apartmentOwner
        }
        const apartment = await Apartment.create(data)
        res.status(201).json({
            success: true,
            apartment
        })

    } catch (error) {
        next(error)
    }
}

deleteApartment = async (req, res, next)=>{
    try {
        const apartmentId = req.params.id
        const deletedApartment = await Apartment.findOneAndDelete({_id: apartmentId})

        if(deletedApartment){
            res.status(200).json({
                success: true,
                message: 'post deleted successfully !'
            })
        } else{
            next(new ErrorHandler("Apartment Doesn't exist", 404))
        }
    } catch (error) {
        next(error)
    }
}

module.exports = {createApartment, deleteApartment}