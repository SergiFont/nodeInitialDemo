const express = require('express')
const router = express.Router()
const {uploadedFile} = require('./../controllers/upload.js')
const valImage = require('../middlewares/valImage.js')

router.use(valImage)

router.post('/', uploadedFile)

module.exports = router