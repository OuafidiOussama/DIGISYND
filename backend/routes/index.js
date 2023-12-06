const express = require('express')
const router = express.Router()

const superAdminRouter = require('./superAdmin.js')
router.use('/superAdmin', superAdminRouter)

const apartmentRouter = require('./apartment.js')
router.use('/apartment', apartmentRouter)

const syndicRouter = require('./syndic.js')
router.use('/syndic', syndicRouter)

module.exports = router