const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'tarjeta',
    {
        idTarjeta:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        descripcion : {
            type: Sequelize.STRING
        },
        idBanco : {
            type: Sequelize.INTEGER
        }
    },
    {
        timestamps: false
    }

)