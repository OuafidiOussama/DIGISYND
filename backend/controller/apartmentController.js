const Apartment = require('../model/ApartmentModel')
const Bill = require('../model/BillModel')
const ErrorHandler = require('../utils/errorHandler')

getAllApartments = async (req, res, next)=>{
    try {
        const apartments = await Apartment.find({syndic: req.user._id}).sort({ createdAt: -1})
        const bills = await Bill.find({
            apartment:{$in:apartments.map(apartment=>apartment._id)},
        })
        const currentDate = new Date().toLocaleDateString('fr-MA',{
            year: "2-digit",
            month: "2-digit"
        })
        const apartmentsWithBills = apartments.map(apartment=>{
            const apartmentBills = bills.filter(bill=>{
                const isEqual = apartment._id.equals(bill.apartment)
                const dates = bill.paidAt.map(date=>{
                    const formattedDate = new Date(date).toLocaleDateString('fr-MA',{
                        year: "2-digit",
                        month: "2-digit"
                    })
                    return formattedDate === currentDate
                })
                const isTrue = dates.includes(true)
                return isEqual && isTrue
            })
            return {
                ...apartment.toObject(),
                isPaid: apartmentBills.length > 0
            }
        })
        res.status(200).json({
            success: true,
            apartmentsWithBills,
        })

    } catch (error) {
        next(error)
    }
}

createApartment = async (req, res, next) =>{
    try {
        const data = {
            apartmentNumber: req.body.apartmentNumber,
            apartmentFloor: req.body.apartmentFloor,
            syndic: req.user._id,
            apartmentOwner: {
                ownerName: req.body.ownerName,
                cin: req.body.cin,
                picture: req.body.picture
            }
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
        const data = {
            apartmentNumber: req.body.apartmentNumber || currentApartment.apartmentNumber,
            apartmentFloor: req.body.apartmentFloor || currentApartment.apartmentFloor,
            apartmentOwner: {
                ownerName: req.body.ownerName || currentApartment.apartmentOwner.ownerName,
                cin: req.body.cin || currentApartment.apartmentOwner.cin,
                picture: req.body.picture || currentApartment.apartmentOwner.picture,
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
    getAllApartments,
    createApartment,
    updateApartment,
    deleteApartment
}