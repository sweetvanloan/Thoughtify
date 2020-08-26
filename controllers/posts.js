const Post = require('../models/post');
const mongoose = require("mongoose");


// const { default: Post } = require("../src/components/Post/Post");

module.exports = {
    index, //show all the posts
    create: createPost, //create 
    delPost //delete
    // show we build later

}
async function index(req, res) {
    const posts = await Post.find({});

    res.json(posts);
}
//create post 
function createPost(req, res) {

    Post.create(req.body)
}

//delete post 
function delPost(req, res) {

}
