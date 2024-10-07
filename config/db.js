const { Sequelize } = require('sequelize')

// dotenv.config();
const sequelize = new Sequelize(
    { 
    database: "ejeryemploidb", 
    user:"postgres", 
    database: "borditasybd", 
    host: 'localhost',
    dialect: 'PostgresDialect',
    logging: false,
    define: {
        freezeTableName: true 
    } 
})

const testDbConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (err) {
        console.log('ito connection error')
        console.error("error to connect to the database:", err) 
    }
};

testDbConnection()
module.exports = { sq: sequelize, testDbConnection };

