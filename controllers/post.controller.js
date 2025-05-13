const postRepo = require("../repositories/post.repository");

const getPosts = async (req, res) => {
  try {
    const posts = await postRepo.getPosts();
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ message: "Failed to fetch posts" });
  }
};

module.exports = {
  getPosts,
};
