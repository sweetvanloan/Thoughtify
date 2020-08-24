
const { default: Post } = require("../src/components/Post/Post");

module.exports = {
    index,
  getAllPosts
}

async function index(req, res) {
    const posts = await Post.find({});
    res.json(posts);
  
  
//this will be a function that will later be able to render the most recent x amounts of already existing posts for the firehose view
function getAllPosts(req, res) {

}