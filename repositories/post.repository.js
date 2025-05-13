const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getPosts = async () => {
  try {
    const posts = await prisma.post.findMany({})

    return posts
  } catch (error) {
    console.error("Error fetching posts:", error)
    throw new Error("Failed to fetch posts")
  }
}

module.exports = {
  getPosts,
};
