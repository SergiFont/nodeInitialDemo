const express = require('express')
const router = express.Router()
const authUser = require('./../middlewares/authUser.js')
const {showDateTime} = require('./../controllers/time.js')
const setCache = require('./../middlewares/setCache.js')

router.use(setCache)
router.use(authUser)
router.post('/', showDateTime)

module.exports = router