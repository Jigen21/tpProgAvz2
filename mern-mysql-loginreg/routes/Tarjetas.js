const express = require("express")
const tarjetas = express.Router()
const cors = require('cors')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')

const Tarjeta = require("../models/Tarjeta")
tarjetas.use(cors())

tarjetas.get('/all', (req, res) => {
  Tarjeta.findAll()
      .then(tarjetas => {
        res.json(tarjetas)
      })
      .catch(err => {
        res.status(400).json({ error: err })
      })
  })



module.exports = tarjetas