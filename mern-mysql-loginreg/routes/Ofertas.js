const express = require("express")
const ofertas = express.Router()
const cors = require('cors')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')

const Oferta = require("../models/Oferta")
ofertas.use(cors())

ofertas.get('/all', (req, res) => {
  Oferta.findAll()
      .then(ofertas => {
        res.json(ofertas)
      })
      .catch(err => {
        res.status(400).json({ error: err })
      })
  })



module.exports = ofertas