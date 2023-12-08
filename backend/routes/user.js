const express = require('express')
const { register, login } = require('../controller/userController')
const { isSuper, authenticate } = require('../middleware/auth')
const router = express.Router()

router.post('/register', authenticate, isSuper, register)
router.post('/login', login)


module.exports = router