const express = require("express")
const localidades = express.Router()
const cors = require('cors')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')

const Localidad = require("../models/Localidad")
localidades.use(cors())

localidades.get('/all', (req, res) => {
    Localidad.findAll()
      .then(localidades => {
        res.json(localidades)
      })
      .catch(err => {
        res.status(400).json({ error: err })
      })
  })



module.exports = localidades