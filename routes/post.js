const express = require('express')
const router = express.Router()
const {createPost, getPosts} = require('../controller/post')

router.get('/view', getPosts)

router.post('/new', createPost)

module.exports = router