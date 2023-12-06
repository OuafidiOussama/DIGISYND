require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const errorHandler = require('./middleware/error')

app.use(express.json())
app.use(cors())
app.use(errorHandler)


const indexRoute = require('./routes')
// app.use('/api', indexRoute)

app.listen(process.env.PORT, ()=>{
    console.log(`App is started on ${process.env.PORT} port`);
})