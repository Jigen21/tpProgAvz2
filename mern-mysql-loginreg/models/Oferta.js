const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'oferta',
    {
        idOferta:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        porcentajeDescuento : {
            type: Sequelize.INTEGER
        },
        fechaInicio : {
            type: Sequelize.DATE
        },
        fechaFin : {
            type: Sequelize.DATE
        },
        idProducto : {
            type: Sequelize.INTEGER
        }
    },
    {
        timestamps: false
    }

)