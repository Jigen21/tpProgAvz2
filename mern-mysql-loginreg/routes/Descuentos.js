const express = require("express")
const descuentos = express.Router()
const cors = require('cors')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')

const Descuento = require("../models/Descuento")
descuentos.use(cors())

descuentos.get('/all', (req, res) => {
  Descuento.findAll()
      .then(descuentos => {
        res.json(descuentos)
      })
      .catch(err => {
        res.status(400).json({ error: err })
      })
  })

//PARA AGREGAR UN DESCUENTO


descuentos.post('/agregarDescuento' , (req,res) => {
    const descuentoData = {
      codigoDescuento: req.body.codigoDescuento,
      porcentajeDescuento: req.body.porcentajeDescuento,
      fechaInicio:req.body.fechaInicio,
      fechaFin:req.body.fechaFin
      
  }
  Descuento.findOne({
      where: {
        codigoDescuento:req.body.codigoDescuento
      }
  })
  .then(user => {
      if(!user){
         // bcrypt.hash(req.body.descripcion,10,(err,hash) => {
              //productData.descripcion = hash
              Descuento.create(descuentoData)
              .then(user => {
                  res.json({status: 'registered'})
              })
              .catch(err => {
                  res.send('error: ' + err)
              })
         // })
      }else{
          res.json({error: "El Producto ya existe"})
      }
  })
  .catch(err => {
      res.send('error: ' + err)
  })
})



descuentos.post('/borrar', (req, res) => {
  
   Descuento.destroy({
    where: {
      idDescuento:req.body.id
    }
    })
    .then(function(rowDeleted){ // rowDeleted will return number of rows deleted
      if(rowDeleted === 1){
  
        res.json({error: "borrado con exito"})
       }
    }, function(err){
      res.json({error: "no se pudo borrar"})
    });

})
  



module.exports = descuentos