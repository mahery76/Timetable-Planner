const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    password: "borditasy", // mahery desktop pg mdp
    // password: "lesdapery", // mahery laptop pg mdp
    host: "localhost",
    port: 5432,
    database: "ejeryemploidb"
});

// const pool = new Pool({
//     connectionString: "postgres://ejeryemploidb_user:mPopMVq6Vz84JJhchNoAfK7WRdaCiabt@dpg-cmee89v109ks73c4hteg-a.oregon-postgres.render.com/ejeryemploidb?sslmode=require"
// })

module.exports = pool
