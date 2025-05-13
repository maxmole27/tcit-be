const postRepo = require("../repositories/post.repository");

const getPosts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1
    const pageSize = parseInt(req.query.pageSize) || 10

    if (page < 1 || pageSize < 1) {
      return res.status(400).json({ message: "Está entregando valores negativos!" })
    }

    const result = await postRepo.getPosts(page, pageSize)

    res.status(200).json(result)
  } catch (error) {
    console.error("Error regresando los posts", error)
    res.status(500).json({ message: "Error regresando los posts" })
  }
}

const getRawPosts = async (req, res) => {
  try {
    const result = await postRepo.getRawPosts()
    res.status(200).json(result)
  } catch (error) {
    console.error("Error fetching posts:", error)
    res.status(500).json({ message: "Failed to fetch posts" })
  }

}

const createPost = async (req, res) => {
  try {
    const postData = req.body

    if (!postData.name || !postData.description) {
      return res.status(400).json({ message: "Titulo y Descripción son obligatorios" })
    }

    const post = await postRepo.createPost(postData)

    res.status(201).json(post)
  } catch (error) {
    console.error("Error al crear post:", error)
    res.status(500).json({ message: "Error al crear post" })
  }
}

const deletePost = async (req, res) => {
  try {
    const postId = parseInt(req.params.id)
    if (isNaN(postId)) {
      return res.status(400).json({ message: "Post ID debe ser un número válido" })
    }
    const post = await postRepo.deletePost(postId)

    if (!post) {
      return res.status(404).json({ message: "Post no fue encontrado" })
    }

    res.status(200).json({ message: "Post Eliminado!", post })
  } catch (error) {
    console.error("Error al eliminar el post:", error)
    res.status(500).json({ message: "Error al eliminar el post" })
  }
}

module.exports = {
  getPosts,
  getRawPosts,
  createPost,
  deletePost,
};
