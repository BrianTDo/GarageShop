const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port =  process.env.PORT || 5000

connectDB()

const app = express()

const indexRouter = require("./routes/index")
const shopRouter = require("./routes/shopRoutes")
const loginRouter = require("./routes/login")

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Routes
app.use('/', indexRouter)
app.use('/api/shops', shopRouter)
app.use('/login', loginRouter)
app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))