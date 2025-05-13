const PORT = 3000

const express = require('express')
require('dotenv').config()

const app = express()
const cors = require('cors')

const postRoutes = require('./routes/post.routes')


app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/posts', postRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})