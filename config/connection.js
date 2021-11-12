require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: "mysql",
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: +process.env.DATABASE_PORT || 3306
});

module.exports = sequelize; 
