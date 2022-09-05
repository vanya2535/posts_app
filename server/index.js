const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const postRouter = require('./routers/postRouter')

const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
  exposedHeaders: '*'
}

const app = express()

const PORT = process.env.PORT || 3000
const DB_URL =
  'mongodb+srv://vanya2535:qwerty1402@cluster0.ry4ockl.mongodb.net/?retryWrites=true&w=majority'

app.use(express.json())
app.use(cors(corsOptions))

app.use('/posts', postRouter)

async function start() {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    })

    app.listen(PORT, () => {
      console.log(`Server listen on http://localhost:${PORT}`)
    })
  } catch (e) {
    console.log(e)
  }
}

start()
