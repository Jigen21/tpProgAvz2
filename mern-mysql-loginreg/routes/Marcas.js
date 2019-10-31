const express = require("express")
const marcas = express.Router()
const cors = require('cors')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')

const Marca = require("../models/Marca")
marcas.use(cors())

marcas.get('/all', (req, res) => {
  Marca.findAll()
      .then(marcas => {
        res.json(marcas)
      })
      .catch(err => {
        res.status(400).json({ error: err })
      })
  })



module.exports = marcas