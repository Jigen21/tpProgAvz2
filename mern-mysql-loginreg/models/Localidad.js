const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'localidade',
    {
        idLocalidad:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nombre : {
            type: Sequelize.STRING
        },
        costoEnvio : {
            type: Sequelize.INTEGER
        }
    },
    {
        timestamps: false
    }

)