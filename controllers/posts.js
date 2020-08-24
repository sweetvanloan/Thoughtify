const { default: Post } = require("../src/components/Post/Post");

module.exports = {
    index
}
async function index(req, res) {
    const posts = await Post.find({});
    res.json(posts);
}