const express = require('express')
const mongoose = require('mongoose')
const app = express() // creating an INSTANCE of express
require('dotenv').config();

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
 })
 .then(() => console.log('DB connected'))
 .catch(err => console.log(err))

 // routes
app.get('/', (req, res, next) => {
    console.log(`user accessed localhost:${port}${req.originalUrl}`)
    next()
}, 
    (req, res) => {
        res.send('hello')
    })

app.get('/post', (req, res, next) => {
    console.log(`user accessed localhost:${port}${req.originalUrl}`)
    next()
}, 
    (req, res) => {
        res.send('post route')
    })

const port = 3000

// PORT
app.listen(port)