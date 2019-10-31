const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'proveedore',
    {
        idProveedor:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nombre : {
            type: Sequelize.STRING
        },
        email : {
            type: Sequelize.STRING
        },
        telefono : {
            type: Sequelize.STRING
        }
    },
    {
        timestamps: false
    }

)