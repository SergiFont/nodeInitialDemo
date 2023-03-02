const express = require('express')
const fileUpload = require('express-fileupload')

const logger = require('./middlewares/logger.js')
const userRouter = require('./routes/user.js')
const uploadRouter = require('./routes/upload.js')

const app = express()
const port = 3000
app.use(fileUpload())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(logger)

app.use('/user', userRouter)

// app.get('/user', (req, res) => {
//     const response = {
//         name: 'Sergi',
//         edat: '29',
//         url: req.protocol + '://' + req.get('host') + req.url
//         }
//     res.json(response)
//   })

app.use('/upload', uploadRouter)

// app.post('/upload', (req, res) => {
//   const {image} = req.files

//   if (!image) return res.sendStatus(400)
//   if (path.extname(image.name) !== ('.jpg' || '.png' || '.gif')) return res.sendStatus(400)
//   if (!/^image/.test(image.mimetype)) return sendStatus(400) // mas filtros, because why not

//   image.mv(__dirname + './../img/' + Date.now() + image.name)

//   res.sendStatus(200)
// })

  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  })