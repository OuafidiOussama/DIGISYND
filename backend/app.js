require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const errorHandler = require('./middleware/error')
const connectDB = require('./config/db') 
connectDB()

app.use(express.json({limit: '10mb'}))
app.use(cors())
app.use(errorHandler)


const indexRoute = require('./routes')
app.use('/api', indexRoute)

module.exports = app