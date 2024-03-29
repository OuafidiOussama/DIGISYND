const express = require('express')
const {billPay, billUnpay, getAllBills, getBillByApartId} = require('../controller/billController')
const { authenticate, isSyndic, isCreatorBill } = require('../middleware/auth')
const router = express.Router()

router.get('/all', authenticate, isSyndic, getAllBills)
router.post('/pay/:id', authenticate, isSyndic, billPay)


module.exports = router