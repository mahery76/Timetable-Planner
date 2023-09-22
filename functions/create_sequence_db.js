const {sq} = require("../config/db")

const create_sequence_db = async () => {
    sq.query("CREATE SEQUENCE role_id_seq START 1");
    
}