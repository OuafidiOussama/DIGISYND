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
        const bill = await Bill.findOne({apartment: apartmentId}) 
        const date = new Date()
        const year = date.getFullYear()
        const month = date.getMonth() + 1
        const newDate = ([month, year].join('/')).toString()
        if(bill){
            const newBill = await Bill.findByIdAndUpdate(
                {_id: bill._id},
                {$addToSet:{monthPaid: newDate}, $addToSet:{paidAt: Date.now()}},
                {new: true}
            )
            res.status(201).json({
                success: true,
                newBill
            })
        } else{
            const data = {
                apartment: apartmentId,
                syndic: req.user._id,
                monthPaid: newDate,
                paidAt: Date.now()
            }
            const createdBill = await Bill.create(data)
            res.status(201).json({
                success: true,
                createdBill
            })
        }
    } catch (error) {
        next(error)
    }
}


billUnpay = async (req, res, next)=>{
    try {
        const apartId = req.params.id
        const deletedBill = await Bill.findOneAndDelete({apartment: apartId})
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