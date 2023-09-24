const { DataTypes } = require('sequelize')
const { sq } = require("../config/db.js");
const add_seq = require('../functions/add_seq.js');
const Ens_crens = require('./Ens_cren.js');
const Salles = require('./Salle.js');
const Matieres = require('./Matiere.js');


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
Ens_crens.hasMany(Occupations, {foreignKey: 'id_ens_cren'})
Salles.hasMany(Occupations, {foreignKey: 'id_salle'})
Matieres.hasMany(Occupations, {foreignKey: 'id_matiere'})

add_seq(sq, "occupations_id_seq", Occupations, "id_occupation", "o");

module.exports = Occupations
