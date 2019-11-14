const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express() // creating an INSTANCE of express
require('dotenv').config();

app.use(bodyParser.json())
app.use(cors())

const postRoute = require('./routes/post')

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
 })
 .then(() => console.log('DB connected'))
 .catch(err => console.log(err))

 // routes
app.use('/post', postRoute)
app.get('/', (req, res) => {
    res.send('On the root route')
})

const port = 3000

// PORT
app.listen(port)