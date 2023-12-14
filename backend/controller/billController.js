const Apartment = require('../model/ApartmentModel')
const Bill = require('../model/BillModel')
const ErrorHandler = require('../utils/errorHandler')

getAllBills = async(req, res, next)=>{
    try {
        const bills = await Bill.find()
        res.status(200).json({
            success: true,
            bills
        })
    } catch (error) {
        next(error)
    }
}

billPay = async (req, res, next) =>{
    try {
        const apartmentId = req.params.id
        const doesExist = await Apartment.findById({_id: apartmentId})
        if(!doesExist){
            next(new ErrorHandler('Apartment doesnt exist', 404))
        }
        const data = {
            apartment: apartmentId,
            syndic: req.user._id
        }
        const bill = await Bill.create(data)
        res.status(201).json({
            success: true,
            bill
        })

    } catch (error) {
        next(error)
    }
}


billUnpay = async (req, res, next)=>{
    try {
        const billId = req.params.id
        const deletedBill = await Bill.findOneAndDelete({_id: billId})

        if(!deletedBill){
            next(new ErrorHandler("Bill Doesn't exist", 404)) 
        }
        
        res.status(200).json({
            success: true,
            message: 'Bill deleted successfully !'
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    billPay,
    billUnpay,
    getAllBills
}