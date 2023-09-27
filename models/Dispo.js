const { DataTypes } = require('sequelize')
const { sq } = require("../config/db.js");
const add_seq = require('../functions/add_seq.js');
const Creneaus = require('./Creneau.js');
const Enseignants = require('./Enseignant.js');

const Dispos = sq.define('Dispos', {
    id_dispo: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true,
    }
}, {
    timestamps: true,
    createdAt: "dispo_date",
    updatedAt: true,
})
Creneaus.hasMany(Dispos, { foreignKey: 'id_cren', onDelete: 'CASCADE' });
Enseignants.hasMany(Dispos, { foreignKey: 'id_ens', onDelete: 'CASCADE' });
add_seq(sq, "dispos_id_seq", Dispos, "id_dispo", "ts");
module.exports = Dispos
