const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

const getPosts = async (page = 1, pageSize = 10) => {
  try {
    const skip = (page - 1) * pageSize
    
    const [posts, total] = await Promise.all([
      prisma.post.findMany({
        skip,
        take: pageSize,
      }),
      prisma.post.count(), // Si quieres contar todos sin filtro
    ]);

    return {
      posts,
      currentPage: page,
      totalPages: Math.ceil(total / pageSize),
      totalItems: total,
    };
  } catch (error) {
    console.error("Error al traer posts:", error)
    throw new Error("Error al traer posts")
  }
}

const getRawPosts = async () => {
  try {
    const posts = await prisma.post.findMany({})
    return posts
  } catch (error) {
    console.error("Error al traer posts:", error)
    throw new Error("Error al traer posts")
  }

}

const createPost = async (postData) => {
  try {
    const post = await prisma.post.create({
      data: postData,
    });
    return post
  } catch (error) {
    console.error("Error al crear el post:", error)
    throw new Error("Error al crear el post")
  }
}

const deletePost = async (id) => {
  try {
    const post = await prisma.post.delete({
      where: { id },
    });
    return post
  } catch (error) {
    console.error("Error al eliminar el post:", error)
    throw new Error("Error al eliminar el post")
  }
}

module.exports = {
  getPosts,
  getRawPosts,
  createPost,
  deletePost,
}
