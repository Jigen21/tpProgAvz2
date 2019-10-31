const express = require("express")
const users = express.Router()
const cors = require('cors')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')

const User = require("../models/User")
users.use(cors())

process.env.SECRET_KEY = 'secret'

users.post('/register' , (req,res) => {
    const today = new Date()
    const userData = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email:req.body.email,
        clave:req.body.clave,
        created:today
    }
    User.findOne({
        where: {
            email:req.body.email
        }
    })
    .then(user => {
        if(!user){
            bcrypt.hash(req.body.password,10,(err,hash) => {
                //userData.password = hash
                User.create(userData)
                .then(user => {
                    res.json({status:user.email + 'registered'})
                })
                .catch(err => {
                    res.send('error: ' + err)
                })
            })
        }else{
            res.json({error: "User already exists"})
        }
    })
    .catch(err => {
        res.send('error: ' + err)
    })
})

users.post('/login',(req,res) => {
    User.findOne({
        where: {
            email:req.body.email
        }
    })
    .then(user => {
        if(user){
            //if(bcrypt.compareSync(req.body.password,user.password)){
                if(req.body.clave == user.clave){
                //let token = jwt.sign(user.dataValues,process.env.SECRET_KEY, {
                //    expiresIn: 1440
               // })
               res.send(user);
                //res.send(token)
            }
            else{
                res.status(400).json({error: 'User does not exist'})
            }
        }else{
            res.status(400).json({error: 'User does not exist'})
        }
    })
    .catch(err => {
        res.status(400).json({error: err})
    })
})


users.get('/all', (req, res) => {
    User.findAll()
      .then(user => {
        res.json(user)
      })
      .catch(err => {
        res.status(400).json({ error: err })
      })
  })


module.exports = users