const express = require("express")
const pedidos = express.Router()
const cors = require('cors')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')

const Pedido = require("../models/Pedido")
pedidos.use(cors())

pedidos.post('/guardarPedido' , (req,res) => {
  const today = new Date()
  const pedidoData = {
      fecha: today,
      importeTotal: req.body.importeTotal,
      direccion:req.body.direccion,
      envio:req.body.envio,
      codigoPostal:req.body.codigoPostal,
      idLocalidad:req.body.idLocalidad,
      idCliente:req.body.idCliente,
      idEstado:req.body.idEstado,
      idDescuento:req.body.idDescuento,
      importeDescuento:req.body.importeDescuento
  }
  //Pedido.findOne({
   //   where: {
    //    envio:req.body.envio
     // }
 // })
 Pedido.findAll()
  .then(user => {
      //if(!user){
       //   bcrypt.hash(req.body.envio,10,(err,hash) => {
             debugger;
              Pedido.create(pedidoData)
              .then(user => {
                  res.json({status:user.envio + 'registered'})
              })
              .catch(err => {
                  res.send('error: ' + err)
              })
        //  })
     // }else{
          debugger;
        //  res.json({error: "El Producto ya existe"})
      //}
  })
  .catch(err => {
      debugger;
      res.send('error: ' + err)
  })
})



pedidos.post('/pedidosCliente', (req, res) => {
    //let id = JSON.parse(localStorage.getItem("Usuario"));
    Pedido.findAll({
           where: {
            idCliente : req.body.idCliente
           }
         })
    
      .then(user => {
        res.json(user)
      })
      .catch(err => {
        res.status(400).json({ error: err })
      })
  })


pedidos.get('/all', (req, res) => {
Pedido.findAll()
    .then(pedidos => {
        res.json(pedidos)
    })
    .catch(err => {
        res.status(400).json({ error: err })
    })
})



module.exports = pedidos
