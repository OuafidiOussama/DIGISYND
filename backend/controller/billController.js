const Apartment = require('../model/ApartmentModel')
const Bill = require('../model/BillModel')
const ErrorHandler = require('../utils/errorHandler')

getAllBills = async(req, res, next)=>{
    try {
        const bills = await Bill.find({syndic: req.user._id}).sort({ createdAt: -1})
        res.status(200).json({
            success: true,
            bills
        })
    } catch (error) {
        next(error)
    }
}

// getBillByApartId = async(req, res, next)=>{
//     try {
//         const apartmentId = req.params.id 
//         const bill = await Bill.findOne({apartment: apartmentId})
//         if(!bill){
//             next(new ErrorHandler('No Bill Found', 404))
//         }
//         const currentDate = new Date().toLocaleDateString('fr-MA',{
//             year: "2-digit",
//             month: "2-digit"
//         })
//         const allPaidAt = bill.paidAt
//         const formattedAllPaidAt = allPaidAt.map((paidAt)=>{
//             return new Date(paidAt).toLocaleDateString('fr-MA',{
//                 year: "2-digit",
//                 month: "2-digit"
//             })
            
//         })
//         console.log(currentDate);
//         console.log(formattedAllPaidAt);
//         res.status(200).json({
//             success: true,
            
//         })
//     } catch (error) {
//         next(error)
//     }
// }

billPay = async (req, res, next) =>{
    try {
        const apartmentId = req.params.id
        const doesExist = await Apartment.findById({_id: apartmentId})
        if(!doesExist){
            next(new ErrorHandler('Apartment doesnt exist', 404))
        }
        const bill = await Bill.findOne({apartment: apartmentId}) 
        if(!bill){
            const data = {
                apartment: apartmentId,
                syndic: req.user._id,
                paidAt: Date.now()
            }
            const createdBill = await Bill.create(data)
            res.status(201).json({
                success: true,
                createdBill
            })
        } else {
            const currentDate = new Date().toLocaleDateString('fr-MA',{
                year: "2-digit",
                month: "2-digit"
            })
            const allPaidAt = bill.paidAt
            const formattedAllPaidAt = allPaidAt.map((paidAt)=>{
                return new Date(paidAt).toLocaleDateString('fr-MA',{
                    year: "2-digit",
                    month: "2-digit"
                })
                
            })
            if(!formattedAllPaidAt.includes(currentDate)){
                const newBill = await Bill.findByIdAndUpdate(
                    {_id: bill._id},
                    {$addToSet:{paidAt: Date.now()}},
                    {new: true}
                )
                res.status(201).json({
                    success: true,
                    newBill
                })
            } else{
                next(new ErrorHandler('Bill Already Paid for this month', 403))
            }
        }
    } catch (error) {
        next(error)
    }
}


billUnpay = async (req, res, next)=>{
    try {
        const apartmentId = req.params.id
        const doesExist = await Apartment.findById({_id: apartmentId})
        if(!doesExist){
            next(new ErrorHandler('Apartment doesnt exist', 404))
        }
        const bill = await Bill.findOne({apartment: apartmentId})
        if(!bill){
            next(new ErrorHandler('Bill Doesnt exist', 404))
        }
        const currentDate = new Date().toLocaleDateString('fr-MA',{
            year: "2-digit",
            month: "2-digit"
        })
        const allPaidAt = bill.paidAt
        const formattedAllPaidAt = allPaidAt.map((paidAt)=>{
            return new Date(paidAt).toLocaleDateString('fr-MA',{
                year: "2-digit",
                month: "2-digit"
            })
        })
        if(!formattedAllPaidAt.includes(currentDate)){
            next(new ErrorHandler('Bill is not Paid Yet', 404))
        }
        const newBill = await Bill.findByIdAndUpdate(
            {_id: bill._id},
            {$pull:{paidAt: new Date(currentDate)}},
            {new: true}
        )
        
        res.status(200).json({
            success: true,
            message: 'Bill deleted successfully !',
            newBill
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    billPay,
    billUnpay,
    getAllBills,
}