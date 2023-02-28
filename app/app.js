const express = require('express')
const fileUpload = require('express-fileupload')

const app = express()
const port = 3000
// const timeStamp = 
app.use(fileUpload())

app.get('/user', (req, res) => {
    const response = {
        name: 'Sergi',
        edat: '29',
        url: req.protocol + '://' + req.get('host') + req.url
        }
    res.json(response)
  })

app.post('/upload', (req, res) => {
  const {image} = req.files

  if (!image) return res.sendStatus(400)
  if (!/^image/.test(image.mimetype)) return sendStatus(400)

  image.mv(__dirname + './../img/' + Date.now() + image.name)

  res.sendStatus(200)
})
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  })