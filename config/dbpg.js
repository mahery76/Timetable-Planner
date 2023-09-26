const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "borditasy",
    host: "localhost",
    port: 5432,
    database: "ejeryemploidb"

});
module.exports = pool

module.exports = pool;