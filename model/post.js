const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    body: {
        type: String,
        require: true
    },
    created: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Post", PostSchema);