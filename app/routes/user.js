const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    const response = {
        name: 'Sergi',
        edat: '29',
        url: req.protocol + '://' + req.get('host') + req.url
        }
    res.json(response)
  })

  module.exports = router