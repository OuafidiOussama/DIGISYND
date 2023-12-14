const express = require('express')
const { createApartment, updateApartment, deleteApartment, getAllApartments } = require('../controller/apartmentController')
const { authenticate, isSyndic, isCreatorApartment } = require('../middleware/auth')
const router = express.Router()

router.get('/all', authenticate, isSyndic, getAllApartments)
router.post('/create', authenticate, isSyndic, createApartment)
router.put('/update/:id', authenticate, isSyndic, isCreatorApartment, updateApartment)
router.delete('/delete/:id', authenticate, isSyndic, isCreatorApartment, deleteApartment)


module.exports = router