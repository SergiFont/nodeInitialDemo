const express = require('express')
const router = express.Router()
const showPokemon = require('./../controllers/pokemon.js')

router.get('/', showPokemon)

module.exports = router