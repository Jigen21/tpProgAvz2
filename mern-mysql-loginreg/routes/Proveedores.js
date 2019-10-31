const express = require("express")
const proveedores = express.Router()
const cors = require('cors')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')

const Proveedor = require("../models/Proveedor")
proveedores.use(cors())

proveedores.get('/all', (req, res) => {
  Proveedor.findAll()
      .then(proveedores => {
        res.json(proveedores)
      })
      .catch(err => {
        res.status(400).json({ error: err })
      })
  })


  proveedores.post('/agregarProveedor' , (req,res) => {
      const proveedorData = {
        nombre: req.body.nombre,
        telefono: req.body.telefono,
        email:req.body.email,
        
    }
    Proveedor.findOne({
        where: {
          nombre:req.body.nombre
        }
    })
    .then(user => {
        if(!user){
           // bcrypt.hash(req.body.descripcion,10,(err,hash) => {
                //productData.descripcion = hash
                Proveedor.create(proveedorData)
                .then(user => {
                    res.json({status:user.nombre + 'registered'})
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


//PROBANOD PARA BORRAR

proveedores.post('/borrar', (req, res) => {
  
    //res.json({error: req.body.id});
   /* Proveedor.findOne({
      where: {
        idProveedor:req.body.id
      }
     })*/
     Proveedor.destroy({
      where: {
        idProveedor:req.body.id
      }
      })
      .then(function(rowDeleted){ // rowDeleted will return number of rows deleted
        if(rowDeleted === 1){
          // console.log('Deleted successfully');
          res.json({error: "borrado con exito"})
         }
      }, function(err){
        res.json({error: "no se pudo borrar"})
      });
     /*.then(provee =>
      {
        if(!provee)
        {
          res.json({Datos : "Borrado con exito"});
        }
      
        
      })
      .catch(err => {
        res.send('err' + err);
      })*/


  })



module.exports = proveedores