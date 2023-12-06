const Apartment = require('../model/ApartmentModel')

createApartment = async (req, res, next) =>
{
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

module.exports = {createApartment}