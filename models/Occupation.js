const { DataTypes } = require('sequelize')
const { sq } = require("../config/db.js");
const add_seq = require('../functions/add_seq.js');
const Ens_crens = require('./Ens_cren.js');
const Matieres = require('./Matiere.js');
const Classe_matieres = require('./Classe_matiere.js');
const Salles = require('./Salle.js');


const Occupations = sq.define('Occupations', {
    id_occupation: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true,
    },
    heures_restantes: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    timestamps: true
})
Occupations.belongsTo(Ens_crens, {foreignKey: 'id_ens_cren'})
Occupations.belongsTo(Classe_matieres, {foreignKey: 'id_classe_matiere'})
Occupations.belongsTo(Salles, {foreignKey: 'id_salle'})
add_seq(sq, "occupations_id_seq", Occupations, "id_occupation", "o");
module.exports = Occupations
