const { Pool } = require("pg");
const dotenv = require('dotenv');

// dotenv.config();
const pool = new Pool({
    user: "postgres",
    password: "borditasybd", 
    host: "localhost",
    port: 5432,
    database: "ejeryemploidb"
});

module.exports = pool
