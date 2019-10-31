const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'estado',
    {
        idEstado:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nombre : {
            type: Sequelize.STRING
        }        
    },
    {
        timestamps: false
    }

)