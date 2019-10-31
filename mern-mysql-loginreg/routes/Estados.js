const express = require("express")
const estados = express.Router()
const cors = require('cors')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')

const Estado = require("../models/Estado")
estados.use(cors())

estados.get('/all', (req, res) => {
  Estado.findAll()
      .then(estados => {
        res.json(estados)
      })
      .catch(err => {
        res.status(400).json({ error: err })
      })
  })



module.exports = estados