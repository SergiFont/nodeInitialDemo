const express = require('express')
const router = express.Router()
const {uploadedFile} = require('./../controllers/upload.js')
const valImage = require('../middlewares/valImage.js')

router.use(valImage)

router.post('/', uploadedFile)
// router.post('/', (req, res) => {
//     const {image} = req.files
//     image.mv(__dirname + '/img/' + Date.now() + image.name)
  
//     res.status(200).send('Image uploaded succesfully')
//   })

module.exports = router