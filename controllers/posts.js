const Post = require('../models/post');
const User = require('../models/user');
const mongoose = require("mongoose");
module.exports = {
    index, //show all the posts
    create: createPost, //create 
    delete: deletePost,
    show, // show we build later
    update,
}
function createPost(req, res) {
    Post.create(req.body)
}
async function show(req, res) {
    if (req) {
        const post = await Post.findById({});
        res.json(post);
    } else {
        redirect("/main");
        alert("Uh-oh, looks like something went wrong! Welcome back!")
    }
}
async function index(req, res) {
    const posts = await Post.find({});
    res.json(posts);
}
function update(req, res) {
    Post.findByIdAndUpdate(req.params.id, 
        {
            title: req.body.title,
            body: req.body.body
        }, 
        function(err, post) {
            res.json(post);
        });
}
function deletePost(req, res) {
    Post.findByIdAndDelete(req.params.id, 
            function(err, post) {
                res.json(post);
            });
}
  
