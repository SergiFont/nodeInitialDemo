const express = require('express')
const router = express.Router()
const {showPokemon} = require('./../controllers/pokemon.js')

router.get(`/:id`, showPokemon)

module.exports = router