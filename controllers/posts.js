const mongoose = require("mongoose");
const { default: Post } = require("../src/components/Post/Post");
const Schema = mongoose.Schema;

module.exports = {
    index, //show
    createPost, //create 
    delPost //delete
}

async function index(req, res) {
    const posts = await Post.find({});
    res.json(posts);
}

//create post 
function createPost(req, res) {
    console.log(req);
}

//delete post 
function delPost(req, res) {

}
