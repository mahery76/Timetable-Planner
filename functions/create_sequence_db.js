const { sq } = require("../config/db")

const create_sequence_db = async () => {
    sq.query("CREATE SEQUENCE enseignants_id_seq START 1");
    sq.query("CREATE SEQUENCE etudiants_id_seq START 1");
    sq.query("CREATE SEQUENCE users_id_seq START 1");
    sq.query("CREATE SEQUENCE creneaux_id_seq START 1");
    sq.query("CREATE SEQUENCE ens_cren_id_seq START 1");
    sq.query("CREATE SEQUENCE classes_id_seq START 1");
    sq.query("CREATE SEQUENCE matieres_id_seq START 1");
    sq.query("CREATE SEQUENCE classes_matieres_id_seq START 1");
    sq.query("CREATE SEQUENCE salles_id_seq START 1");
    sq.query("CREATE SEQUENCE occupations_id_seq START 1");
}
module.exports = create_sequence_db