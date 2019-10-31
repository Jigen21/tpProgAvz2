const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'pedido',
    {
        idPedido:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        fecha : {
            type: Sequelize.DATE
        },
        importeTotal : {
            type: Sequelize.DECIMAL
        },
        envio : {
            type: Sequelize.BOOLEAN
        },
        direccion : {
            type: Sequelize.STRING
        },
        codigoPostal : {
            type: Sequelize.INTEGER
        },
        idLocalidad : {
            type: Sequelize.INTEGER
        },
        idCliente : {
            type: Sequelize.INTEGER
        },
        idEstado : {
            type: Sequelize.INTEGER
        },
        idDescuento : {
            type: Sequelize.INTEGER
        },
        importeDescuento : {
            type: Sequelize.DECIMAL
        }
    },
    {
        timestamps: false
    }

)