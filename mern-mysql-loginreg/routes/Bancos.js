const express = require("express")
const bancos = express.Router()
const cors = require('cors')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')

const Banco = require("../models/Banco")
bancos.use(cors())

bancos.get('/all', (req, res) => {
  Banco.findAll()
      .then(bancos => {
        res.json(bancos)
      })
      .catch(err => {
        res.status(400).json({ error: err })
      })
  })



module.exports = bancos