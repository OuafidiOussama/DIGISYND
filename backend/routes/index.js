const express = require('express')
const router = express.Router()

const apartmentRouter = require('./apartment.js')
router.use('/apartment', apartmentRouter)

const userRouter = require('./user.js')
router.use('/user', userRouter)

const billRouter = require('./bill.js')
router.use('/bill', billRouter)

module.exports = router