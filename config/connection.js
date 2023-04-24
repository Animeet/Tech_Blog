const Sequelize = require('sequelize');
require('dotenv').config();
let connection;


if (process.env.JAWSDB_URL) {
    connection = new Sequelize(process.env.JAWSDB_URL)
} else {
    connection = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USERNAME,
        process.env.DB_PASSWORD,
        {
            host: 'localhost',
            dialect: 'mysql'
        }
    )
}

// const connection = process.env.JAWSDB_URL
//     ? new Sequelize(process.env.JAWSDB_URL)
//     : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//         host: 'localhost',
//         dialect: 'mysql',
//         dialectOptions: {
//             decimalNumbers: true,
//         },
//     });

module.exports = connection;