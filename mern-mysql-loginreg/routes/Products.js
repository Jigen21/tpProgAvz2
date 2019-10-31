const express = require("express")
const products = express.Router()
const cors = require('cors')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')

const Product = require("../models/Producto")
products.use(cors())

products.post('/register' , (req,res) => {
  const today = new Date()
  const productData = {
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      precio:req.body.precio,
      num_reposicion:req.body.num_reposicion,
      stock:req.body.stock,
      imagen:req.body.imagen,
      id_categoria:req.body.id_categoria,
      id_marca:req.body.id_marca,
      fecha_ingreso:today
  }
  Product.findOne({
      where: {
        nombre:req.body.nombre
      }
  })
  .then(user => {
      if(!user){
          bcrypt.hash(req.body.descripcion,10,(err,hash) => {
              //productData.descripcion = hash
              Product.create(productData)
              .then(user => {
                  res.json({status:user.nombre + 'registered'})
              })
              .catch(err => {
                  res.send('error: ' + err)
              })
          })
      }else{
          res.json({error: "El Producto ya existe"})
      }
  })
  .catch(err => {
      res.send('error: ' + err)
  })
})



products.get('/all', (req, res) => {
    Product.findAll()
      .then(product => {
        res.json(product)
      })
      .catch(err => {
        res.status(400).json({ error: err })
      })
  })


  products.post('/borrar', (req, res) => {
  
     Product.destroy({
      where: {
        idProducto:req.body.id
      }
      })
      .then(function(rowDeleted){ 
        if(rowDeleted === 1){

          res.json({error: "borrado con exito"})
         }
      }, function(err){
        res.json({error: "no se pudo borrar"})
      });
     


  })


module.exports = products