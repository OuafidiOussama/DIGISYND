const express = require('express')
const { createApartment } = require('../controller/apartmentController')
const { authenticate, isSyndic } = require('../middleware/auth')
const router = express.Router()

router.post('/create', authenticate, isSyndic, createApartment)


module.exports = router