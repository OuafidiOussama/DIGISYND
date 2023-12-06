const express = require('express')
const { createApartment, deleteApartment } = require('../controller/apartmentController')
const { authenticate, isSyndic, isCreator } = require('../middleware/auth')
const router = express.Router()

router.post('/create', authenticate, isSyndic, createApartment)
router.delete('/delete/:id', authenticate, isSyndic, isCreator, deleteApartment)


module.exports = router