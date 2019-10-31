const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'producto',
    {
        idProducto:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nombre : {
            type: Sequelize.STRING
        },
        descripcion : {
            type: Sequelize.STRING
        },
        precio : {
            type: Sequelize.DECIMAL
        },
        stock : {
            type: Sequelize.INTEGER
        },
        stockMinimo : {
            type: Sequelize.INTEGER
        },
        stockMaximo : {
            type: Sequelize.INTEGER
        },
        fechaIngreso : {
            type: Sequelize.INTEGER
        },
        imagen : {
            type: Sequelize.STRING
        },
        idCategoria : {
            type: Sequelize.INTEGER
        },
        idMarca : {
            type: Sequelize.INTEGER
        },
        idProveedor : {
            type: Sequelize.INTEGER
        }
    },
    {
        timestamps: false
    }

)