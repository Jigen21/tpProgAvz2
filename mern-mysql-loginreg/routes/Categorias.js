const express = require("express")
const categorias = express.Router()
const cors = require('cors')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')

const Categoria = require("../models/Categoria")
categorias.use(cors())

categorias.get('/all', (req, res) => {
  Categoria.findAll()
      .then(categorias => {
        res.json(categorias)
      })
      .catch(err => {
        res.status(400).json({ error: err })
      })
  })



module.exports = categorias