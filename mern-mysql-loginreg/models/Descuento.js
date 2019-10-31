const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'descuento',
    {
        idDescuento:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        codigoDescuento : {
            type: Sequelize.INTEGER
        },
        porcentajeDescuento : {
            type: Sequelize.INTEGER
        },
        fechaInicio : {
            type: Sequelize.DATE
        },
        fechaFin : {
            type: Sequelize.DATE
        }        
    },
    {
        timestamps: false
    }

)