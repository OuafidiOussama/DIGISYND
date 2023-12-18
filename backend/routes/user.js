const express = require('express')
const { register, login, userProfile, changePassword, logout } = require('../controller/userController')
const { isSuper, authenticate } = require('../middleware/auth')
const router = express.Router()

router.post('/register', authenticate, isSuper, register)
router.post('/login', login)
router.get("/me", authenticate, userProfile)
router.get('/logout', authenticate, logout)
router.patch("/password", authenticate, changePassword)


module.exports = router