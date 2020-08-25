const Post = require('../models/post');
const mongoose = require("mongoose");
module.exports = {
    index, //show
    create: createPost, //create 
    delPost //delete

}
async function index(req, res) {
    const posts = await Post.find({});
    res.json(posts);
}
//this will be a function that will later be able to render the most recent x amounts of already existing posts for the firehose view
// function getAllPosts(req, res) {

// }



//create post 
function createPost(req, res) {
    console.log(req);
    Post.create(req.body)
}

//delete post 
function delPost(req, res) {
    console.log(req);
}
