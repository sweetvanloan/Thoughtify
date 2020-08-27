const Post = require('../models/post');
const mongoose = require("mongoose");
const { Redirect } = require('react-router-dom');


// const { default: Post } = require("../src/components/Post/Post");

module.exports = {
    index, //show all the posts
    create: createPost, //create 
    delPost, //delete
    show // show we build later

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

async function show(req, res) {
    if (req) {
        console.log("REQ in POSTJS is - ", req)
        const post = await Post.findById({});
        res.json(post);
    } else {
        redirect("/main");
        alert("Uh-oh, looks like something went wrong! Welcome back!")

    }
}
