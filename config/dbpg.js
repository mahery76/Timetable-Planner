const { Pool } = require("pg");

// const pool = new Pool({
//     user: "postgres",
//     password: "lesdapery",
//     host: "localhost",
//     port: 5432,
//     database: "ejeryemploidb"
// });

const pool = new Pool({
    connectionString: "postgres://ejeryemploidb_user:mPopMVq6Vz84JJhchNoAfK7WRdaCiabt@dpg-cmee89v109ks73c4hteg-a.oregon-postgres.render.com/ejeryemploidb"
})

module.exports = pool
