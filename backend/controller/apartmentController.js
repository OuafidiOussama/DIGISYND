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

updateApartment = async (req, res, next)=>{
    try {
        const apartmentId = req.params.id
        const currentApartment = await Apartment.findById({_id:apartmentId})
        console.log(req.body.apartmentOwner.ownerName);
        const data = {
            apartmentOwner: {
                ownerName: req.body.apartmentOwner.ownerName || currentApartment.apartmentOwner.ownerName,
                cin: req.body.apartmentOwner.cin || currentApartment.apartmentOwner.cin,
                picture: req.body.apartmentOwner.picture || currentApartment.apartmentOwner.picture,
            }
        }
        const updatedApartment = await Apartment.findOneAndUpdate(
            {_id: apartmentId},
            data,
            {new: true}
        )
        if (!updatedApartment) {
            next(new ErrorHandler('Something Went Wrong', 404))
        }
        res.status(200).json({
            success: true,
            updatedApartment,
          });
    } catch (error) {
        next(error)
    }
}

deleteApartment = async (req, res, next)=>{
    try {
        const apartmentId = req.params.id
        const deletedApartment = await Apartment.findOneAndDelete({_id: apartmentId})

        if(!deletedApartment){
            next(new ErrorHandler("Apartment Doesn't exist", 404)) 
        }
        
        res.status(200).json({
            success: true,
            message: 'post deleted successfully !'
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createApartment,
    updateApartment,
    deleteApartment
}