const express = require('express')
const { register, login, userProfile, logout } = require('../controller/userController')
const { isSuper, authenticate } = require('../middleware/auth')
const router = express.Router()

router.post('/register', authenticate, isSuper, register)
router.post('/login', login)
router.get("/me", authenticate, userProfile)
router.get('/logout', authenticate, logout)


module.exports = router