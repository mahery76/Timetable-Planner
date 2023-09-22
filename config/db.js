const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('ejeryemploidb', 'postgres', 'borditasy', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
})
const testDbConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (err) {
        console.error("error to connect to the database:", err)
    }
};
testDbConnection()
module.exports = { sq: sequelize, testDbConnection };