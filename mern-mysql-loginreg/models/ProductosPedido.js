const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'productos_pedido',
    {
        idPedido:{
            type:Sequelize.INTEGER,
            primaryKey:true
        },
        idProducto : {
            type: Sequelize.INTEGER,
            primaryKey:true
        },
        cantidad : {
            type: Sequelize.INTEGER
        },
        importe : {
            type: Sequelize.INTEGER
        }
    },
    {
        timestamps: false
    }

)