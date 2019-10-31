const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'user',
    {
        idUsuario:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nombre : {
            type: Sequelize.STRING
        },
        apellido : {
            type: Sequelize.STRING
        },
        fechaNacimiento : {
            type: Sequelize.DATE
        },
        telefono : {
            type: Sequelize.STRING
        },
        email : {
            type: Sequelize.STRING
        },
        clave : {
            type: Sequelize.STRING
        },
        idRol : {
            type: Sequelize.INTEGER
        }
    },
    {
        timestamps: false
    }

)