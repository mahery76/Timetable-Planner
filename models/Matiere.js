const { DataTypes } = require('sequelize')
const { sq } = require("../config/db.js");
const add_seq = require('../functions/add_seq.js');
const Enseignants = require('./Enseignant.js');

const Matieres = sq.define('Matieres', {
    id_matiere: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true,
    },
    nom_matiere: {
        type: DataTypes.STRING,
        allowNull: false
    },
    volume_horaire: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
},{
    timestamps: false
})
Matieres.belongsTo(Enseignants, {foreignKey: 'id_ens'})
add_seq(sq, "matieres_id_seq", Matieres, "id_matiere", "c");
module.exports = Matieres