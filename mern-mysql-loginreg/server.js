var express = require("express")
var cors = require("cors")
var bodyParser =require("body-parser")
var app = express()
var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))

//USUARIOS
var Users = require('./routes/Users')
//PRODUCTOS
var Products = require('./routes/Products')
//LOCALIDADES
var Localidades = require('./routes/Localidades')
//PEDIDOS
var Pedidos = require('./routes/Pedidos')
//PROVEEDORES
var Proveedores = require('./routes/Proveedores')
//DESCUENTOS
var Descuentos = require('./routes/Descuentos')
//MARCAS
var Marcas = require('./routes/Marcas')
//ESTADOS
var Estados = require('./routes/Estados')

//USUARIOS
app.use('/users',Users)
//PRODUCTOS
app.use('/products',Products)
//LOCALIDADES
app.use('/localidades',Localidades)
//PEDIDOS
app.use('/pedidos',Pedidos)
//PROVEEDORES
app.use('/proveedores',Proveedores)
//DESCUENTOS
app.use('/descuentos',Descuentos)
//MARCAS
app.use('/marcas',Marcas)
//ESTADOS
app.use('/estados',Estados)


app.listen(port, () => {
    console.log("Server is running on port: " +port)
})