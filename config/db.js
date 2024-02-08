const { Sequelize } = require('sequelize')
// const sequelize = new Sequelize('postgres://ejeryemploidb_user:mPopMVq6Vz84JJhchNoAfK7WRdaCiabt@dpg-cmee89v109ks73c4hteg-a.oregon-postgres.render.com/ejeryemploidb?ssl=true')

const sequelize = new Sequelize('ejeryemploidb', 'postgres', 'borditasy', { // mahery desktop pg mdp
// const sequelize = new Sequelize('ejeryemploidb', 'postgres', 'lesdapery', {        // mahery laptop pg mdp
    host: 'localhost',
    dialect: 'postgres',
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

// postgres://ejeryemploidb_user:mPopMVq6Vz84JJhchNoAfK7WRdaCiabt@dpg-cmee89v109ks73c4hteg-a/ejeryemploidb
// postgres://ejeryemploidb_user:mPopMVq6Vz84JJhchNoAfK7WRdaCiabt@dpg-cmee89v109ks73c4hteg-a.oregon-postgres.render.com/ejeryemploidb