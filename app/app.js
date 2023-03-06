const express = require('express')
const fileUpload = require('express-fileupload')
const logger = require('./utils/logger.js')
const userRouter = require('./routes/user.js')
const uploadRouter = require('./routes/upload.js')
const timeRouter = require('./routes/time.js')
const pokeRouter = require('./routes/pokemon.js')

const app = express()
const port = 3000
app.use(fileUpload())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(logger)

app.use('/user', userRouter)

app.use('/upload', uploadRouter)

app.use('/time', timeRouter)

app.use('/pokemon/test', pokeRouter)
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  })