const Post = require('../model/post')

exports.createPost = (req, res) => {
    const post = new Post(req.body)
    post.save((err, result) => {
        if(err) {
            console.log(err)
        }
        res.json(result)
    })
}

exports.getPosts = (req, res) => {
    console.log(req.body)
    Post.find().select('title body created').sort({created: -1})
        .then(posts => {
            res.json(posts)
        })
        .catch(err => console.log(err))
}