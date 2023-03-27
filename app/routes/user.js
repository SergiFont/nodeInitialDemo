const express = require('express')
const router = express.Router()
const setCORS = require('../middlewares/setCORS.js')

router.use(setCORS)

router.get('/', (req, res) => {
    const response = {
        name: 'Sergi',
        edat: '29',
        url: req.protocol + '://' + req.get('host') + req.url
        }
    res.json(response)
  })

  module.exports = router