const express = require('express')
const router = express.Router()

const apartmentRouter = require('./apartment.js')
router.use('/apartment', apartmentRouter)

const userRouter = require('./user.js')
router.use('/user', userRouter)

module.exports = router